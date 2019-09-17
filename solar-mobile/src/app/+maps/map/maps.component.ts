import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone, ViewEncapsulation, ViewChild, ElementRef, } from '@angular/core';
import { GoogleAPIService, MapStyleService } from '../shared';
import { fadeInTop } from '../shared/animations/router.animations';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';
import { LoadServices } from '../../+loads/loads.service';
import { globalObj } from '../../load-information'
import * as moment from 'moment';
declare var google: any;
declare var MarkerClusterer: any;
declare let cordova: any;
var directionsService = new google.maps.DirectionsService();


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'maps',
    templateUrl: './maps.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./maps-component.css']
})

export class ClusterMapsComponent implements OnInit {
    activeBtn = '';
    locationName: any;
    today_date = new Date();
    public timeandDate: any;
    public timeandDateError: any;
    public enableCompleteLoadButton: any;
    public travellingDistance: any;
    public travellingTime: any;
    public travellingDate: any;
    public activeStyle: any;
    public map: any;
    // public directionsService;
    // public directionsDisplay;
    public markerClustering;
    public locationMarker;
    public geocoder;
    public locateDriverCurrentAddress: any;
    public DriverloadData: any;
    LocationMarkerinfowindow: any;
    public DriverdrirectionEnabled = false;
    public navigationDropdown: boolean;
    public DriverLocationDetails: any;
    public DriverLocationErrorDetails: any;
    public weatherResponse: any;
    public weatherLoader = true;
    public clustermarkers: any;
    public loadDetails: any = [];
    public loadDeatailsError;
    public driverDistanceInfoWindow;
    // final filter object storage for cluster
    public filterClusterData: any = {};

    // weather modal
    @ViewChild('weatherDetailsModal') public weatherDetailsModal: ModalDirective;
    @ViewChild('showLoadCompleteAlert') public showLoadCompleteAlert: ModalDirective;

    // map themes
    public styles = [
        { key: 'colorful', name: 'Colorful', url: '/greyscale.json' },
    ];

    public showChildModal(): void {
        this.weatherDetailsModal.show();
    }

    public showCompleteLoadPopup() {
        this.showLoadCompleteAlert.show();
    }

    public hideChildModal(): void {
        this.weatherDetailsModal.hide();
    }


    constructor(private el: ElementRef, private loadservice: LoadServices,
        private apiService: GoogleAPIService, private cdRef: ChangeDetectorRef,
        private styleService: MapStyleService, private route: ActivatedRoute, private router: Router) {
    }


    ngOnInit() {
        // hiding the weather and completed load button
        this.enableCompleteLoadButton = false;
        this.DriverdrirectionEnabled = false;
        this.requestNativeLocationAccess();
        this.getLoadDetails();
    }

    click() {
        this.showCompleteLoadPopup();
    }

    requestNativeLocationAccess() {
        document.addEventListener('deviceready', () => {
            // console.log('maps device ready');
            cordova.plugins.locationAccuracy.request((success) => {
                // console.log('Successfully requested accuracy: ' + success.message);
                this.getLoadDetails();

            }, (error) => {
                navigator['app'].exitApp();
                if (error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED) {
                    if (window.confirm('Failed to automatically set Location Mode to "High Accuracy"' +
                        +' Would you like to switch to the Location Settings page and do this manually?')) {
                        cordova.plugins.diagnostic.switchToLocationSettings();
                    }
                }
            }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
        })
    }

    // get all laods service
    getLoadDetails() {
        const driverId = localStorage.getItem('driverData');
        this.loadservice.getAllLoads(driverId).subscribe(
            data => {
                if (data.data != null) {
                    this.loadDetails = data.data;
                    if (this.loadDetails.length > 0) {
                        this.geoLocation();
                    }
                } else {
                    this.loadDeatailsError = data.error.message;
                }
            },
            error => {
                this.loadDeatailsError = error;
                console.log(JSON.stringify(error))
            });
    }
    // get current position coroordinates
    geoLocation() {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(this.getCurrentLocation.bind(this),
                this.locationError.bind(this), { enableHighAccuracy: true });
        }
    }

    // success callback
    getCurrentLocation = (position) => {
        // temporary us co-ordinates
        const lotLatLng = {
            lat: 39.053720,
            lng: -121.517768
        };

        // orginal to get current position
        // var lotLatLng = {
        //     lat: position.coords.latitude,
        //     lng: position.coords.longitude
        // };
        this.locateDriverCurrentAddress = lotLatLng;
        this.loadMap(lotLatLng);
    }
    // error call back
    locationError = () => {
        alert('Please Enable Location Services');
    }
    loadObj: any = [];
    // load map
    loadMap(currentCoordinates) {
        this.activeStyle = this.styles[0];

        // Loading the amp Service
        this.apiService.loadAPI.then((google) => {
            //      console.log('google api loaded');
            // library API

            this.geocoder = new google.maps.Geocoder();

            // loading map theme
            //    this.fetchStyle(this.activeStyle);

            // map track to current location
            this.map = new google.maps.Map(document.getElementById('map-canvas'), {
                center: currentCoordinates,
                zoom: 3,
                disableDefaultUI: true

            });

            if (!localStorage.getItem('acceptedLoadNumber')) {
                this.clusturingMapDispatureLocations(this.loadDetails, { lat: this.loadDetails[0].driver.latitude, lng: this.loadDetails[0].driver.longitude });
            } else {
                for (let i = 0; i < this.loadDetails.length; i++) {
                    if (this.loadDetails[i].loadNumber === localStorage.getItem('acceptedLoadNumber')) {
                        //origin,destination last skid,driverLocation,geoMiles
                        this.loadObj = this.loadDetails[i];
                        this.filtersStatus = true;
                        this.driverLatitude = this.loadDetails[i].driver.latitude;
                        this.driverLongitude = this.loadDetails[i].driver.longitude;
                        this.startNavigateMap({ lat: this.loadDetails[i].originLocNbr.latitude, lng: this.loadDetails[i].originLocNbr.longitude }, { lat: this.loadDetails[i].skidDrops[this.loadDetails[i].skidDrops.length - 1].destLocNbr.latitude, lng: this.loadDetails[i].skidDrops[this.loadDetails[i].skidDrops.length - 1].destLocNbr.longitude }, { lat: this.loadDetails[i].driver.latitude, lng: this.loadDetails[i].driver.longitude }, this.loadDetails[i].geomiles, this.loadDetails[i].skidDrops)
                    }
                }
            }
        })
    }
    filtersStatus: any = false;
    driverLatitude: any;
    driverLongitude: any;
    gmarkers: any = [];
    geofenceSKidValue: any;
    truckLocationMarker: any
    interValKey: any;
    // route display
    startNavigateMap(dcSatrtLocation, dcEndLocation, driverLocation, geomiles, skidDrops: any) {
        //   console.log(JSON.stringify(dcEndLocation))
        this.DriverdrirectionEnabled = true;
        // this.directionsService = new google.maps.DirectionsService();
        this.driverDistanceInfoWindow = new google.maps.InfoWindow();
        var directionsDisplay = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true,
        });

        // this.geofenceArea(dcEndLocation.lat, dcEndLocation.lng, geomiles);

        // truck marker
        this.truckLocationMarker = new google.maps.Marker({
            position: driverLocation,
            map: this.map,
            draggable: true,
            icon: './assets/img/truck-icon.png',
        });

        this.locateDriverCurrentAddress = driverLocation;

        // dragged river location
        google.maps.event.addListener(this.truckLocationMarker, 'dragend', (event) => {
            this.map.setZoom(10);
            this.map.setCenter(this.truckLocationMarker.getPosition());
            driverLocation.lat = event.latLng.lat();
            driverLocation.lng = event.latLng.lng();
            this.driverLatitude = event.latLng.lat();
            this.driverLongitude = event.latLng.lng();

            this.loadservice.getGeofence(event.latLng.lat(), event.latLng.lng(), this.loadObj.geomiles, this.loadObj.driver.id, this.loadObj.loadNumber).subscribe((data: any) => {
                if (data.data == null) {

                } else {
                    this.geofenceSKidValue = data.data.skidDrop.destLocNbr.locNbr;
                    this.locationName = data.data.skidDrop.destLocNbr.locAddrName;
                    localStorage.setItem('skiddropInspectionLocName', data.data.skidDrop.destLocNbr.locAddrName);
                    localStorage.setItem('skiddropInspectionLocNum', data.data.skidDrop.destLocNbr.locNbr);
                    localStorage.setItem('postSkidId', data.data.skidDrop.id);
                    this.showCompleteLoadPopup();
                }
            })
        });

        // this.interValKey = setInterval(() => {
        //     if (window.navigator.geolocation) {
        //         window.navigator.geolocation.getCurrentPosition(this.updateDriverMarker.bind(this),
        //             this.locationError.bind(this), { enableHighAccuracy: true });
        //     }
        // }, 3000)

        // // truck marker click to get loation details again
        google.maps.event.addListener(this.truckLocationMarker, 'click', (event) => {

        });

        // start and end icons
        const icons = {
            start: {
                url: './assets/img/p.png',
            },
            end: {
                url: './assets/img/endLocationMarker.png',
                origin: new google.maps.Point(0, -30),
            },
        };


        var waypoints = [];
        var ordered_points = [];

        let waypts: any = [];
        this.loadObj.skidDrops.sort((val1, val2) => {
            return val1.skidOrderPerLoad - val2.skidOrderPerLoad
        })

        for (let i = 0; i < this.loadObj.skidDropsCount; i++) {
            waypts.push({
                location: { lat: this.loadObj.skidDrops[i].destLocNbr.latitude, lng: this.loadObj.skidDrops[i].destLocNbr.longitude },
                stopover: true
            })
            this.addMarker(this.loadObj.skidDrops[i].destLocNbr, i, driverLocation);
            this.geofenceArea(this.loadObj.skidDrops[i].destLocNbr.latitude, this.loadObj.skidDrops[i].destLocNbr.longitude, geomiles, this.loadObj.skidDrops[i].postInspectionStatus);
        }

        directionsDisplay.setMap(this.map)
        // route map function
        this.makeMarkerValue(new google.maps.LatLng(dcSatrtLocation.lat, dcSatrtLocation.lng), icons.start, 'Start');
        directionsService.route({
            origin: new google.maps.LatLng(dcSatrtLocation.lat, dcSatrtLocation.lng),
            destination: new google.maps.LatLng(this.loadObj.skidDrops[this.loadObj.skidDrops.length - 1].destLocNbr.latitude, this.loadObj.skidDrops[this.loadObj.skidDrops.length - 1].destLocNbr.longitude),
            waypoints: waypts,
            // optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING,
        }, (response, status) => {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        var infowindow = new google.maps.InfoWindow();
    }

    updateDriverMarker = (position) => {
        console.log(position.coords)
        this.map.setZoom(13);
        this.map.setCenter(this.truckLocationMarker.getPosition());

        this.driverLatitude = position.coords.latitude;
        this.driverLongitude = position.coords.longitude;

        this.loadservice.getGeofence(position.coords.latitude, position.coords.longitude, this.loadObj.geomiles, this.loadObj.driver.id, this.loadObj.loadNumber).subscribe((data: any) => {
            if (data.data == null) {

            } else {
                clearInterval(this.interValKey)
                this.geofenceSKidValue = data.data.skidDrop.destLocNbr.locNbr;
                this.locationName = data.data.skidDrop.destLocNbr.locAddrName;
                localStorage.setItem('skiddropInspectionLocName', data.data.skidDrop.destLocNbr.locAddrName);
                localStorage.setItem('skiddropInspectionLocNum', data.data.skidDrop.destLocNbr.locNbr);
                localStorage.setItem('postSkidId', data.data.skidDrop.id);
                this.showCompleteLoadPopup();
            }
        })
    }
    ngOnDestroy() {
        clearInterval(this.interValKey)
    }

    // geo fence area circle
    geofenceArea(dcEndLocationLat, dcEndLocationLng, geomiles, status) {
        const cityCircle = new google.maps.Circle({
            strokeColor: status ? 'green' : 'red',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: status ? 'green' : 'red',
            fillOpacity: 0.35,
            map: this.map,
            center: new google.maps.LatLng(dcEndLocationLat, dcEndLocationLng),
            radius: (1609.3 * (+geomiles))
        });
    }

    // route start and end location marker class
    makeMarkerValue = (position, icon, title) => {
        new google.maps.Marker({ position: position, map: this.map, icon: icon, title: title });
    }

    addMarker(obj, labelIndex, driverLocation) {
        var lebels = '123456789'
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(obj.latitude, obj.longitude),
            // icon: './assets/img/dealer.png',
            label: lebels[labelIndex++ % lebels.length],
            // title: 'Marker',
            map: this.map
        })

        google.maps.event.addListener(marker, 'click', (objhhhh) => {
            this.loadservice.getTimeandDistance(driverLocation.lat, driverLocation.lng, obj.latitude, obj.longitude).subscribe((tddata) => {
                if (tddata.data) {
                    this.driverDistanceInfoWindow.setContent('<div><strong>Name: ' + obj.locAddrName + '</strong></div><br><div><strong>Holidays:' + obj.holidays + '</strong></div><br><div><strong>Timings:' + obj.timings + '</strong></div><br><div><strong>Time: ' + tddata.data.time + '</strong></div><br><div><strong>Distance: ' + tddata.data.distance.toFixed(2) + '</strong></div><br><div></div>')
                    this.driverDistanceInfoWindow.open(this.map, marker)
                }

            })
        });
    }


    startPostInspection() {
        this.showLoadCompleteAlert.hide();
        this.router.navigate(['/post-inspection/inspectionDetails/', this.geofenceSKidValue])
    }

    addStalls(id) {

        switch (id) {
            case 0: {
                this.activeBtn = 'food';
                break;
            }
            case 1: {
                this.activeBtn = 'fuel';
                break;
            }
            case 2: {
                this.activeBtn = 'motel';
                break;
            }
            default: {
                this.activeBtn = '';
                break;
            }
        }
        var icons = [
            "./assets/img/Restaurant.png", "./assets/img/petrol.png", "./assets/img/pin.png"
        ]
        this.removeMarkers();
        var stalls = [];
        this.loadservice.getStalls(localStorage.getItem('acceptedLoadNumber'), id).subscribe(data => {
            stalls = data.nearByStalls;
            if (stalls.length > 0) {
                for (let i = 0; i < stalls.length; i++) {
                    this.addStall(stalls[i], icons[id]);
                }
            } else {
                var grade: any = id;
                switch (grade) {
                    case 0: {
                        this.activeBtn = '';
                        alert('Food Courts not available');
                        break;
                    }
                    case 1: {
                        this.activeBtn = '';
                        alert('Fuel Stations not available');
                        break;
                    }
                    case 2: {
                        this.activeBtn = '';
                        alert('Motels not available');
                        break;
                    }

                    default: {
                        this.activeBtn = '';
                        break;
                    }
                }
            }

        })
    }
    addStall(position, icon) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(position.latitude, position.longitude),
            map: this.map,
            icon: icon
        })
        this.gmarkers.push(marker)

        google.maps.event.addListener(marker, 'click', (obj) => {
            this.loadservice.getTimeandDistance(this.driverLatitude, this.driverLongitude, position.latitude, position.longitude).subscribe((tddata) => {
                var data = JSON.parse(tddata.googleData)
                this.driverDistanceInfoWindow.setContent('<div><strong>Name: ' + position.name + '</strong></div><br><div><strong>Address:' + position.address + '</strong></div><br><div></div><hr><div><strong>Time: ' + data.rows[0].elements[0].duration.text + '</strong></div><br><div><strong>Distance: ' + data.rows[0].elements[0].distance.text + '</strong></div><br><div></div>')
                this.driverDistanceInfoWindow.open(this.map, marker)
            })
        });

    }
    removeMarkers() {
        for (let i = 0; i < this.gmarkers.length; i++) {
            this.gmarkers[i].setMap(null);
        }
    }
    removeMarkers2() {
        this.activeBtn = '';
        for (let i = 0; i < this.gmarkers.length; i++) {
            this.gmarkers[i].setMap(null);
        }
    }
    // clustering map
    clusturingMapDispatureLocations(loadDetailsData, driverLocation) {
        //     console.log('cluster function called')
        const Dispaturelocations: any = [];
        const self = this;
        // filter to unique locations
        const uniqueData = [];
        const uniqueLocations = [];
        for (let i = 0; i < loadDetailsData.length; i++) {
            if (uniqueData.indexOf(loadDetailsData[i].originLocNbr.locNbr) === -1) {
                uniqueLocations.push(loadDetailsData[i].originLocNbr)
                uniqueData.push(loadDetailsData[i].originLocNbr.locNbr);
            }
        }
        uniqueLocations.forEach(function (obj) {
            const TripNumbers = [];
            loadDetailsData.forEach(function (obj2) {
                if (obj.locNbr === obj2.originLocNbr.locNbr) {
                    const tripNum = {
                        'apptNbr': obj2.loadNumber
                    }
                    TripNumbers.push(tripNum)
                }
                obj.tripnumbers = TripNumbers;
            })
        });

        // pushing locations to cluster
        uniqueLocations.forEach(function (location) {
            Dispaturelocations.push(location);
        })
        let clickedLocObject;
        this.LocationMarkerinfowindow = new google.maps.InfoWindow();
        // adding the dispature locations markers
        this.clustermarkers = Dispaturelocations.map((location, i) => {
            const Dcmarker = new google.maps.Marker({
                position: new google.maps.LatLng(location.latitude, location.longitude)
            });

            // set marker zoom position
            this.map.setZoom(3);
            this.map.setCenter(new google.maps.LatLng(42.552413, -104.269675));

            // opening the info window for location marker
            google.maps.event.addListener(Dcmarker, 'click', (currentLocationmarkerEvent) => {
                let loadHtml: any = '';
                // set load numbers to content window
                location.tripnumbers.forEach(function (num, index) {
                    loadHtml += '<a id="navigateToLoads' + index + '"><div><strong class="padding-5">'
                    ' </strong></div></a>'
                })

                // set content
                this.LocationMarkerinfowindow.setContent('<div><strong><a class="padding-5">' + location.locAddrName + '</a>' + '</div>');
                this.LocationMarkerinfowindow.open(this.map, Dcmarker);
                clickedLocObject = location;
            });
            return Dcmarker;
        });
        // adding the click event to load number in info window loation marker in cluster
        google.maps.event.addListener(this.LocationMarkerinfowindow, 'domready', () => {

        })

        // Add a marker clusterer to manage the markers.
        const markerCluster = new MarkerClusterer(this.map, this.clustermarkers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

        // truck marker
        const truckLocationMarker = new google.maps.Marker({
            position: driverLocation,
            map: this.map,
            draggable: false,
            icon: './assets/img/truck-icon.png',
        });
    }

    //



    // weather report function
    weatherReport() {
        this.weatherDetailsModal.show();
        this.weatherLoader = true;
        this.loadservice.getWeatherReport(this.locateDriverCurrentAddress.lat, this.locateDriverCurrentAddress.lng).subscribe(
            data => {
                if (data != null) {
                    this.weatherResponse = data;
                    const tempF = this.weatherResponse.temp;
                    const tempC = (tempF - 32) * 5 / 9;
                    let windDirection;
                    this.weatherResponse.tempC = Math.round(tempC);
                    const windDirectionAngle = this.weatherResponse.windd,
                        windSpeed = this.weatherResponse.winds,
                        gust = this.weatherResponse.gust;
                    const that = this;
                    if ((windDirectionAngle >= 0 && windDirectionAngle < 22.5)) {
                        windDirection = 'N'
                    } else if (windDirectionAngle === 22.5) {
                        windDirection = 'NNE'
                    } else if ((windDirectionAngle > 22.5 && windDirectionAngle < 67.5)) {
                        windDirection = 'NE'
                    } else if (windDirectionAngle === 67.5) {
                        windDirection = 'ENE'
                    } else if ((windDirectionAngle > 67.5 && windDirectionAngle < 112.5)) {
                        windDirection = 'E'
                    } else if (windDirectionAngle === 112.5) {
                        windDirection = 'ESE'
                    } else if ((windDirectionAngle > 112.5 && windDirectionAngle < 157.5)) {
                        windDirection = 'SE'
                    } else if (windDirectionAngle === 157.5) {
                        windDirection = 'SSE'
                    } else if ((windDirectionAngle > 157.5 && windDirectionAngle < 202.5)) {
                        windDirection = 'S'
                    } else if (windDirectionAngle === 202.5) {
                        windDirection = 'SSW'
                    } else if ((windDirectionAngle > 202.5 && windDirectionAngle < 247.5)) {
                        windDirection = 'SW'
                    } else if (windDirectionAngle === 247.5) {
                        windDirection = 'WSW'
                    } else if ((windDirectionAngle > 247.5 && windDirectionAngle < 292.5)) {
                        windDirection = 'W'
                    } else if (windDirectionAngle === 292.5) {
                        windDirection = 'WNW'
                    } else if ((windDirectionAngle > 292.5 && windDirectionAngle < 337.5)) {
                        windDirection = 'NW'
                    } else if (windDirectionAngle === 337.5) {
                        windDirection = 'NNW'
                    } else if ((windDirectionAngle > 337.5 && windDirectionAngle <= 360)) {
                        windDirection = 'N'
                    }
                    if (windSpeed === '0' && windDirectionAngle === '0') {
                        this.weatherResponse.wind_speed = 'calm';
                    } else if (windSpeed === '0' && windDirectionAngle === 'NA') {
                        this.weatherResponse.wind_speed = 'NA';
                    } else {
                        if (gust === '0' || gust === 'NA') {
                            this.weatherResponse.wind_speed = windDirection + ' ' + this.weatherResponse.winds + ' MPH';
                        } else {
                            this.weatherResponse.wind_speed = windDirection + ' ' + this.weatherResponse.winds + ' G ' + gust + ' MPH';
                        }
                    }
                    const altimeter = this.weatherResponse.altimeter;
                    if (altimeter === '0') {
                        this.weatherResponse.barometer = this.weatherResponse.slp;
                    } else {
                        this.weatherResponse.barometer = this.weatherResponse.slp + ' in (' + this.weatherResponse.altimeter + ' mb)';
                    }
                    const dewpF = this.weatherResponse.dewp;
                    const dewp = (dewpF - 32) * 5 / 9;
                    const dewpC = Math.round(dewp);
                    this.weatherResponse.dewPOintInDeg = dewpC;
                    const humidity = this.weatherResponse.relh;
                    let heatIndexF, heatIndexC;
                    if (tempF > 80 && humidity > 40 && dewpF > 60) {

                        heatIndexF = -42.379
                            + 2.04901523 * tempF
                            + 10.14333127 * humidity
                            - .22475541 * tempF * humidity
                            - .00683783 * tempF * tempF
                            - .05481717 * humidity * humidity
                            + .00122874 * tempF * tempF * humidity
                            + .00085282 * tempF * humidity * humidity
                            - .00000199 * tempF * tempF * humidity * humidity;

                        heatIndexF = Math.round(heatIndexF);
                        heatIndexC = (heatIndexF - 32) * 5 / 9;
                        heatIndexC = Math.round(heatIndexC);

                        this.weatherResponse.heatIndexF = heatIndexF;
                        this.weatherResponse.heatIndexC = heatIndexC;
                    }
                    this.weatherLoader = false;


                } else {
                    this.weatherLoader = false;
                    this.weatherResponse = null;
                    this.DriverLocationErrorDetails = 'Unable to get weather details';
                    console.log('Unable to get user details');
                }
            },
            error => {
                console.log('Error')
                this.weatherLoader = false;
                this.DriverLocationErrorDetails = error;
            });

    }

    // set map theme
    fetchStyle(style) {
        this.styleService.fetchStyle(style).subscribe((styleDef) => {
            this.map.mapTypes.set(style.key,
                new google.maps.StyledMapType(styleDef,
                    { name: style.name })
            );
            this.map.setMapTypeId(style.key);
        })
    }


}

