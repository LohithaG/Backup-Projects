import { Component, OnInit } from '@angular/core';
import { FoodServices } from '../food.service';
declare var MarkerClusterer:any;
declare var google: any;

@Component({
  selector: 'app-foodcourts',
  templateUrl: './foodcourts.component.html',
  styleUrls: ['./foodcourts.component.css']
})
export class FoodcourtsComponent implements OnInit {

  constructor(private foodServices:FoodServices) { }
  map:any;
  ngOnInit() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: -0.024, lng: 0.887}
    });
    this.getAllFoodCourts();
  }

  getAllFoodCourts(){
    var latlangs = [];
    var details;
    this.foodServices.getFoodCourts().subscribe(data => {
      details = data.data;
      // console.log(details);
      for (let i = 0; i < details.length; i++) {
        latlangs.push({ lat: details[i].latitude, lng: details[i].longitude })
      }
      console.log(latlangs);
      var icon = {
        url: "./assets/img/Restaurant.png"
      };
      var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
      };
      var infowindow = new google.maps.InfoWindow();
      for (let i = 0; latlangs.length; i++) {
        var latlng = new google.maps.LatLng(latlangs[i].lat, latlangs[i].lng);
        var marker = new google.maps.Marker({
          position: latlng,
          title: 'Marker',
          map: this.map,
          icon: icon,
          shape: shape
        })
        // var content='<div>'+'<h3>'+details[i].address+'</h3>'+'<br/>'+'<button  onclick="drawRoutes()">Get Directions</button>'+'</div>';
        
        makeInfoWindowEvent(this.map, infowindow, details[i].address, marker);
      }
     
      // function drawaRoutes(){
      //   alert("Hi");
      // }
      function makeInfoWindowEvent(map, infowindow, contentString, marker) {
        var content='<div>'+'<h3>'+contentString+'</h3>'+'<br/>'+'<button  onclick="drawRoutes()">Get Directions</button>'+'</div>';
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(content);
          infowindow.open(map, marker);
        },
        function drawRoutes(){
          alert("Hi");
        });
      }
      
    })
  }
  // drawRoutes(){
  //   alert("Hi");
  // }

}
