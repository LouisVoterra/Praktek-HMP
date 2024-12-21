import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { interval, Subscription } from 'rxjs';
import { FoodserviceService } from '../foodservice.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  lat:number=0
  lon:number=0
  map: any;
  markerLokasi:any;
  timerSubscription: Subscription | undefined; 
  isInit=false

  markerTeman:any;
  lat2=0.0 
  lon2=0.0




  

  constructor(private foodservice:FoodserviceService) { }

  ngOnInit() {
    this.getCoordinates()

  }

  getCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        if (!this.isInit) {
          this.initializeMap()
          this.isInit = true
          this.startTimer()
        }
        else {
         this.moving()
        }
        this.foodservice.updatePosisi(this.lat, this.lon).subscribe((response) => {
          console.log('Posisi terupdated', response);
        },
        (error) => {
          console.error('Error updating posisi', error);
        }
      )
    
      },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
    }
  }

  

  initializeMap() {
    // Create a map centered at a specific location 
    this.map = L.map('map').setView([this.lat, this.lon], 13);
   // Add a gmap street tile layer (you may use other providers, like bing OpenStreetMap, mapbox, etc.. )
    const googleStreets = L.tileLayer(
      'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      { maxZoom: 20, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] }
    );


    var markerIcon = L.icon({
      iconUrl: 'https://ubaya.xyz/hybrid/miftah/map-marker.png', iconSize: [50, 50],
      iconAnchor: [25, 50],
    });
    this.markerLokasi = L.marker([this.lat, this.lon], { icon: markerIcon })
    this.markerLokasi.addTo(this.map);

    this.markerTeman=L.marker([this.lat2, this.lon2], {icon: markerIcon}) 
    this.markerTeman.addTo(this.map);


    googleStreets.addTo(this.map)
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
    this.getCoordinates() 
   });
}

moving() {
  this.markerLokasi.setLatLng([this.lat, this.lon])
  // this.map.flyTo([this.lat, this.lon],13); 
  // this.foodservice.position_xy().subscribe((data) => {
  //   this.markerTeman.setLatLng([data.y, data.x])
  // }
  // );

  this.foodservice.tampilkanPosisi(this.lat,this.lon).subscribe((data)=>{
    this.lat2 = parseFloat(data.latitude);
    this.lon2 = parseFloat(data.longitude);
    this.markerTeman.setLatLng([this.lat2, this.lon2])
  },
  (error) => {
    console.error('gagal lacak lokasi teman', error);
    }
  );
}






}
