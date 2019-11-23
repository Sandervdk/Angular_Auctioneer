import {Component, OnInit} from '@angular/core';
import {Offer} from "../../../models/offer";
import {Offers2Service} from "../../../services/offers2.service";
import {AuctionStatus} from "../../../models/auctionStatus";
import {of} from "rxjs";


class Item {
  url: string;
  src: string;
  descr: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  interval;
  private offers: Offer[];
  private leftOffers: Offer[];
  private rightOffers: Offer[];
  private isLoaded: boolean;

  items: Item[] = [
    {url: '#', src: 'assets/jessica-ruscello--GUyf8ZCTHM-unsplash.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', title: 'old window frames n shizzle'},
    {url: '#', src: 'assets/joao-silas--03UAJK6-w8-unsplash.jpg',       descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', title: 'globerinos'},
    {url: '#', src: 'assets/louis-hansel-S9MV8BG5ops-unsplash.jpg',     descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', title: 'rubbable ghost things'},
    {url: '#', src: 'assets/markus-clemens-9ShzlH_o2Yk-unsplash.jpg',   descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', title: 'old books'},
    {url: '#', src: 'assets/oliver-hale-AydJi_gx_3w-unsplash.jpg',      descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', title: 'ol\' clocks'},
    {url: '#', src: 'assets/ramon-salinero-5yXQiO6k7lk-unsplash.jpg',   descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', title: 'flash boxes'}];

  constructor(private offersService: Offers2Service) {
  }

  ngOnInit() {
    this.interval = this.startInterval(10000, 2000);
    this.offersService.getAllOffers()
      .subscribe(
        (offers) => {
          console.log(offers);
          this.offersService.offers = <Offer[]> offers;
          this.offers = <Offer[]> offers;

          //todo should be used to only show active auctions, but there are none lel
          // for (let i = 0; i < this.offers.length; i++) {
          //   if (this.offers[i].auctionStatus === AuctionStatus.NEW ||
          //     this.offers[i].auctionStatus === AuctionStatus.FOR_SALE) {
          //     if (i < this.offers.length / 2 + 1) {
          //       this.leftOffers.push(this.offers[i]);
          //     } else {
          //       this.rightOffers.push(this.offers[i]);
          //     }
          //   }
          // }
          //todo so I use this shit for now
          this.leftOffers = this.offers.slice(0, this.offers.length / 2 + 1);
          this.rightOffers = this.offers.slice(this.offers.length / 2 + 1);
          this.isLoaded = true;
        })
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  continueInterval() {
    this.interval = this.startInterval(10000, 2000);
  }

  nextItem() {
    clearInterval(this.interval);
    this.changeImage(1, false);
  }

  previousItem() {
    clearInterval(this.interval);
    this.changeImage(-1, false);
  }

  private startInterval(intervaltime: number, transitiontime: number) {
    return setInterval(() => {
      let elements: HTMLCollectionOf<Element>;
      elements = document.getElementsByClassName('image');

      for(let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('active')) {
          //removes the active class after the next images is faded in to stop the white flashing simulator
          setTimeout(() => {elements[i].classList.remove('active')}, transitiontime);

          if (i == elements.length - 1) {
            elements[0].setAttribute('style', 'z-index: 200');
            setTimeout(()=> elements[0].setAttribute('style', ''), transitiontime);
          }

          //checks if it has reached the end of the list, if it has it will restart from the beginning
          if (i == elements.length - 1) {
            elements[0].classList.add('active');
          } else {
            elements[i + 1].classList.add('active');
          }
          return;
        }
      }
    }, intervaltime)
  }

  private changeImage(change: number, customChange: boolean): void {
    let elements: HTMLCollectionOf<Element>;
    elements = document.getElementsByClassName('image');

    for (let i = 0; i < elements.length; i++) {
      if(elements[i].classList.contains('active')) {
        elements[i].classList.remove('active');

        if (customChange) {
          elements[change].classList.add('active');
        } else {
          if (i == 0 && change == -1) {
            elements[elements.length - 1].classList.add('active');
          } else if (i == elements.length - 1 && change == 1) {
            elements[0].classList.add('active');
            console.log(elements[i]);
          } else {
            elements[i + change].classList.add('active');
          }
        }
        return;
      }
    }
  }

}
