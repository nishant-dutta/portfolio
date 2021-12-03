import { Component, OnInit } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.initMap();
  }

  initMap(): void {
    // The location of jamshedpur
    const jamshedpur = { lat: 22.8046, lng: 86.2029 };
    // The map, centered at jamshedpur
    const map = new google.maps.Map(
      document.getElementById("google-maps") as HTMLElement,
      {
        zoom: 6,
        center: jamshedpur,
      }
    );

    // The marker, positioned at jamshedpur
    const marker = new google.maps.Marker({
      position: jamshedpur,
      map: map,
    });
  }
}
