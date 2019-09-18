import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details2',
  templateUrl: './details2.component.html',
  styleUrls: ['./details2.component.css'],

})
export class Details2Component implements OnInit {
  @Input() offer: Offer;

  constructor() { }

  ngOnInit() {
  }

}
