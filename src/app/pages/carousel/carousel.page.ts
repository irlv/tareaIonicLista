import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.page.html',
  styleUrls: ['./carousel.page.scss'],
})
export class CarouselPage implements OnInit {

  constructor() { }
  @ViewChild('slides', { read: true, static: false }) ionSlides: IonSlides;

  ngOnInit() {
  }

}
