import { Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { DashboardsServices } from '../../services/dashboards.services';
import { DashboardDriverService } from '../../services/driverLocations.services';
import { ILoad } from '../../models/load';
import { WeatherComponent } from '../weather/weather.component';
import { ModalDirective } from 'ngx-bootstrap';
import { endponitConfig } from '../../../../environments/endpoints';

declare var L: any;
declare var $: any;

@Component({
	templateUrl: './liveTracking.component.html',
	encapsulation: ViewEncapsulation.None,
	providers: [DashboardsServices, DashboardDriverService, WeatherComponent],
	styles: [`/* Live Tracking */
	.normalLoadMarker,
	.highPriorityLoadMarker,
	.highValueLoadMarker {
		box-sizing: border-box;
		box-shadow: 2px 2px 4px #333;
		border: 5px solid #346FF7;
		height: 20px;
		width: 20px;
		border-radius: 10px;
		float: left;
	}

	.normalLoadMarker {
		background: #05F24C;
	}

	.highPriorityLoadMarker {
		background: #FFFF00;
	}

	.highValueLoadMarker {
		background: red;
	}

	.markers input {
		display: none;
	}

	.markers label {
		font-weight: bold;
		color: #fff
	}
`]
})


export class LiveTrackingComponent implements OnInit, OnDestroy {
	public activePageTitle: string;
	public loads: any;
	public currentMarker: any;
	public loadViewData: any;
	public dummyPreview: any;
	public skidDropData: any;
	public destSkidData: any;
	public dest_location: any;
	public Selectedmarker: any;
	public globalMap: any;
	public addMarker = [];
	public globalmarkers = new L.MarkerClusterGroup();
	public GloabalHighvalueLoadGroup = new L.MarkerClusterGroup();
	public GloabalHighPriorityLoadGroup = new L.MarkerClusterGroup();
	public GloabalNormalLoadGroup = new L.MarkerClusterGroup();
	public messageHighPriority: string;
	public markers3 = new L.MarkerClusterGroup();
	public highvalueSelected: boolean;
	public highprioritySelected: boolean;
	public normalloadSelected: boolean;
	public clearInterval: any;
	public map;
	public markers;
	public skid_distance: any;
	public setAttribute = true;
	public serviceErrorResponse;
	public serviceErrorData;
	loadQueryData: any = { loadNumber: '', driverId: '' };


	@ViewChild('loadviewPopup') public loadviewPopup: ModalDirective;
	public showChildModal(): void {
		this.loadviewPopup.show();
	}

	constructor(private router: Router, private dashboardsServices: DashboardsServices,
		private cdr: ChangeDetectorRef, private dashboardservice: DashboardDriverService, private weatherComponent: WeatherComponent) {
		this.activePageTitle = 'Live Tracking';
	}




	ngOnInit() {
		if (localStorage.getItem('driverNumber')) {
			let data = JSON.parse(localStorage.getItem('driverNumber'))
			this.loadQueryData.loadNumber = data.loadNumber
		}

		this.renderLiveTrackingMap();
		this.normalloadSelected = true;
		this.highvalueSelected = true;
		this.highprioritySelected = true;
	}




	loadData: any = []
	public renderLiveTrackingMap() {
		L.mapbox.accessToken = endponitConfig.MAPBOX_ACCESSTOKEN;
		this.map = L.mapbox.map('map', 'mapbox.streets')
			.setView([39.428893, -103.397667], 4);

		this.setMarkerData(this.map);
		// update markers position every 30 sec
		this.clearInterval = window.setInterval(() => {
			for (const load of this.loads) {
				this.markers.removeLayer(this.addMarker[load.loadNumber]);
			}
			this.setMarkerData(this.map);
		}, 1000 * endponitConfig.AUTO_REFRESH_SERVICE_TIME);
		this.globalMap = this.map;
	}


	setMarkerData(mapInstance) {
		this.dashboardservice.getAcceptedloadNumbers().subscribe(loadList => {
			this.loadData = loadList.data;
			if (this.loadQueryData.loadNumber != '') {
				this.loads = []
				for (let i = 0; i < this.loadData.length; i++) {
					if (this.loadData[i].loadNumber == this.loadQueryData.loadNumber) {
						this.loads.push(this.loadData[i])
					}
				}
			} else {
				this.loads = loadList.data;
			}

			this.markers = new L.MarkerClusterGroup();
			//this.markers.clearMarkers()
			// for loop close
			this.addMarkersOnMap(mapInstance);
			this.globalmarkers = this.markers;
			const HighvalueLoadGroup = new L.MarkerClusterGroup();
			const HighPriorityLoadGroup = new L.MarkerClusterGroup();
			const NormalLoadGroup = new L.MarkerClusterGroup();
			this.markers.eachLayer(function (mark) {
				if (mark.options.icon.options.className === 'highValueLoadMarker') {
					HighvalueLoadGroup.addLayer(mark);
				} else if (mark.options.icon.options.className === 'highPriorityLoadMarker') {
					HighPriorityLoadGroup.addLayer(mark);
				} else {
					NormalLoadGroup.addLayer(mark);
				}
			});
			this.GloabalHighvalueLoadGroup = HighvalueLoadGroup;
			this.GloabalHighPriorityLoadGroup = HighPriorityLoadGroup;
			this.GloabalNormalLoadGroup = NormalLoadGroup;
			if (!this.normalloadSelected) {
				this.LoadFilter(this.normalloadSelected, 3)
			}

			if (!this.highvalueSelected) {
				this.LoadFilter(this.highvalueSelected, 2)
			}

			if (!this.highprioritySelected) {
				this.LoadFilter(this.highprioritySelected, 1)
			}
		}, error => {
			error;
			this.serviceErrorResponse = error.exception;
			this.serviceErrorData = true;
		});
	}

	onChange(obj) {
		this.map.remove();
		L.mapbox.accessToken = endponitConfig.MAPBOX_ACCESSTOKEN;
		this.map = L.mapbox.map('map', 'mapbox.streets')
			.setView([39.428893, -103.397667], 4);

		this.loads = [];
		this.loads.push(obj);
		this.markers = new L.MarkerClusterGroup();
		//this.markers.clearMarkers()
		// for loop close
		this.addMarkersOnMap(this.map);
		this.globalmarkers = this.markers;
		const HighvalueLoadGroup = new L.MarkerClusterGroup();
		const HighPriorityLoadGroup = new L.MarkerClusterGroup();
		const NormalLoadGroup = new L.MarkerClusterGroup();
		this.markers.eachLayer(function (mark) {
			if (mark.options.icon.options.className === 'highValueLoadMarker') {
				HighvalueLoadGroup.addLayer(mark);
			} else if (mark.options.icon.options.className === 'highPriorityLoadMarker') {
				HighPriorityLoadGroup.addLayer(mark);
			} else {
				NormalLoadGroup.addLayer(mark);
			}
		});
		this.GloabalHighvalueLoadGroup = HighvalueLoadGroup;
		this.GloabalHighPriorityLoadGroup = HighPriorityLoadGroup;
		this.GloabalNormalLoadGroup = NormalLoadGroup;
		if (!this.normalloadSelected) {
			this.LoadFilter(this.normalloadSelected, 3)
		}

		if (!this.highvalueSelected) {
			this.LoadFilter(this.highvalueSelected, 2)
		}

		if (!this.highprioritySelected) {
			this.LoadFilter(this.highprioritySelected, 1)
		}
	}



	addMarkersOnMap(mapInstance) {
		const classInstance = this;
		for (const load of this.loads) {
			let myIcon;
			if (load.highPriorityLoad === 1) {
				myIcon = L.divIcon({
					className: 'highPriorityLoadMarker',
					iconSize: 20
				});
			} else if (load.highValueLoad === 1) {
				myIcon = L.divIcon({
					className: 'highValueLoadMarker',
					iconSize: 20
				});
			} else {
				myIcon = L.divIcon({
					className: 'normalLoadMarker',
					iconSize: 20
				});
			}

			this.addMarker[load.loadNumber] = L.marker([load.driver.latitude, load.driver.longitude], {
				icon: myIcon
			})
				.on('mouseover', function (e) {
					const popup = L.popup()
						.setLatLng(e.latlng)
						.setContent('<html><b>Driver Name : </b>' + load.driver.firstName +
						'<br><b>Load Number : </b>' + load.loadNumber + '</html>')
						.openOn(mapInstance);
				})
				.on('mouseout', function () {
					mapInstance.closePopup();
				})
				.on('click', function (e) {
					classInstance.currentMarker = this;
					classInstance.showLoadDetails(load.loadNumber, classInstance.currentMarker);
				})
			this.markers.addLayer(this.addMarker[load.loadNumber]);
		}
		this.map.addLayer(this.markers);
	}

	public showLoadDetails(loadNum, marker) {
		this.getLoadDetailsById(loadNum);
	}

	reset() {
		this.loadQueryData.loadNumber = '';
		this.map.remove();
		clearInterval(this.clearInterval)
		this.renderLiveTrackingMap()
	}
	nextSkidInfo: any;
	lastskidDropInfo: any;
	public getLoadDetailsById(loadNum: string) {

		this.dashboardsServices.getLoadAppointmentsBYLoadNum(loadNum).subscribe(data => {
			if (data != null) {
				this.loadViewData = data;
				if (this.loadViewData.skidDropDetails.length > 1) {
					this.nextSkidInfo = this.loadViewData.skidDropDetails[0];
					this.lastskidDropInfo = this.loadViewData.skidDropDetails[this.loadViewData.skidDropDetails.length - 1]
				} else {
					this.nextSkidInfo = this.loadViewData.skidDropDetails[0];
					this.lastskidDropInfo = this.loadViewData.skidDropDetails[0]
				}

				this.loadviewPopup.show();
				this.dummyPreview = data;
			}
			else {
				alert(data.error.message);
			}
		})

		this.dashboardsServices.getLoadAppointmentById(loadNum).subscribe(loadData => {
			// this.loadViewData = loadData;
			// this.loadviewPopup.show();
			// // this.cdr.detectChanges();
			// this.dummyPreview = loadData;
		});
	}



	public LoadFilter(status, val) {
		let HighPriorityLoadCGroup = new L.MarkerClusterGroup();
		if (val === 2) {
			status === true ? (this.highvalueSelected = true) : (this.highvalueSelected = false)
			HighPriorityLoadCGroup = this.GloabalHighvalueLoadGroup;
		} else if (val === 1) {
			status === true ? (this.highprioritySelected = true) : (this.highprioritySelected = false)
			HighPriorityLoadCGroup = this.GloabalHighPriorityLoadGroup;
		} else {
			status === true ? (this.normalloadSelected = true) : (this.normalloadSelected = false)
			HighPriorityLoadCGroup = this.GloabalNormalLoadGroup;
		}
		this.markers3 = this.globalmarkers;
		this.globalMap.removeLayer(this.globalmarkers);
		if (!status) {
			this.markers3.removeLayer(HighPriorityLoadCGroup);
		} else {
			this.markers3.addLayer(HighPriorityLoadCGroup);
		}
		this.globalMap.addLayer(this.markers3);
	}

	ngOnDestroy() {
		// this.cdr.detach();
		window.clearInterval(this.clearInterval);
		localStorage.removeItem('driverNumber')
	}
	updateMarkerData() {
		this.dashboardservice.getAcceptedloadNumbers().subscribe(loadList => {
			this.loads = loadList.data;
			this.markers = new L.MarkerClusterGroup();
			for (const load of this.loads) {
				const newLatLng = new L.LatLng(load.driver.latitude, load.driver.longitude);
				this.addMarker[load.loadNumber].setLatLng(newLatLng).update();
			}
			if (this.normalloadSelected) {
				this.LoadFilter(true, 3);
			} else {
				this.LoadFilter(false, 3);
			}
			if (this.highvalueSelected) {
				this.LoadFilter(true, 2);
			} else {
				this.LoadFilter(false, 2);
			}
			if (this.highprioritySelected) {
				this.LoadFilter(true, 1);
			} else {
				this.LoadFilter(false, 1);
			}
			// this.map.addLayer(this.markers);
		});
	}
}
// if (this.loadQueryData.loadNumber != '') {
// 	for (let i = 0; i < this.loadData.length; i++) {
// 		if (this.loadData[i].loadNumber==this.loadQueryData.loadNumber ) {
// 			this.loads.push(this.loadData[i])
// 		}
// 	}
// }