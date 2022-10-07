import { Component, Input, OnInit } from '@angular/core';

interface Image{
  id: string;
  imagesrc : string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
 @Input() galleryData: Image[] = [];

 previewImage = false;
 showMask = false;
 currentLightboxImage: Image = this.galleryData[0];
 currentIndex =0 ;
 controls = true;

  constructor(){}
  ngOnInit(): void {
  }

  
  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }
  
  onClosePreview()
  {
  this.previewImage =false;
  }
  
  
}
