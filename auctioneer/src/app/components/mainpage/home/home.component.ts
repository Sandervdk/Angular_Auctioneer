import { Component, OnInit } from '@angular/core';

class Item {
  url: string;
  src: string;
  descr: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: string[] = ['antiques', 'art', 'books', 'fashion', 'comics', 'jewellery'];
  items: Item[] = [
    {url: '#', src: 'assets/jessica-ruscello--GUyf8ZCTHM-unsplash.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {url: '#', src: 'assets/joao-silas--03UAJK6-w8-unsplash.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {url: '#', src: 'assets/louis-hansel-S9MV8BG5ops-unsplash.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {url: '#', src: 'assets/markus-clemens-9ShzlH_o2Yk-unsplash.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {url: '#', src: 'assets/oliver-hale-AydJi_gx_3w-unsplash.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {url: '#', src: 'assets/ramon-salinero-5yXQiO6k7lk-unsplash.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}];

  constructor() { }

  ngOnInit() {
  }

}
