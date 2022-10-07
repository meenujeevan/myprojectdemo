import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Image{
  id: string;
  imagesrc : string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myproject';
  constructor(public router: Router) {

  }
  data: Image[] =[
    {id:'1',imagesrc:'https://image.shutterstock.com/shutterstock/photos/642062308/display_1500/stock-photo-variety-of-ice-cream-scoops-in-cones-with-chocolate-vanilla-and-strawberry-642062308.jpg'},
    {id:'2',imagesrc:'https://www.thespruceeats.com/thmb/_fnt6QUNF7i8k3gn3ZL6C_ejbm0=/1001x1001/smart/filters:no_upscale()/chocolate_hero1-d62e5444a8734f8d8fe91f5631d51ca5.jpg'},
    {id:'3',imagesrc:'https://static.wixstatic.com/media/f57b93_d14c90880d304426afa5586b8d7a1b66~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ganga%20sweets-Pineapple%20cham%20cham%2066251%202.jpg'},
    {id:'4',imagesrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg'},
    {id:'5',imagesrc:'https://preppykitchen.com/wp-content/uploads/2018/04/Funfetti-cake-recipe-new.jpg'},
    {id:'6',imagesrc:'https://assets.winni.in/product/primary/2014/10/53252.jpeg?dpr=2&w=220'},
    {id:'7',imagesrc:'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/t3fswyohnhft3qtmrya1'},
    {id:'8',imagesrc:'https://global-uploads.webflow.com/5f3b41fc2c9e7b58ccbccf8a/5f3b41fc2c9e7b90e6bcd852_healthy-snacks-for-work.png'},
    {id:'9',imagesrc:'https://static.wixstatic.com/media/f3a033_294b3eff800a4fbc949b3ba93de2391c~mv2.jpg/v1/fill/w_560,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Briyani.jpg'},
    {id:'10',imagesrc:'https://www.kalpaflorist.com/wp-content/uploads/2019/06/Online-Chocolates-Gift-Delivery-in-Jalandhar.png'}
  ];


}

