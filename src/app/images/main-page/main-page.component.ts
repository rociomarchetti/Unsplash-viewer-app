import { Images } from './../interfaces/images.interface';
import { UnsplashService } from './../service/unsplash.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  imagesArr: Images[] = [];
  counter: number = 1;
  isShown: boolean = false;

  getPhotos() {
    this.apiService.callApi(this.counter).subscribe((resp) => {
      this.imagesArr = resp;
      this.counter++;
    });
  }

  showText() {
    this.isShown = true;
  }

  hideText() {
    this.isShown = false;
  }

  constructor(private apiService: UnsplashService) {}
}
