import { Images } from './../interfaces/images.interface';
import { UnsplashService } from './../service/unsplash.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  imagesArr: Images[] = [];
  counter: number = 0;
  isShown: boolean = true;
  showMore: boolean = false;

  getPhotos() {
    this.apiService.callApi(this.counter).subscribe((resp) => {
      this.imagesArr = resp;
      this.counter++;
    });
  }

  openModal(index: number) {
    const modal = document.getElementById(`myModal${index}`);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeModal(index: number) {
    const modal = document.getElementById(`myModal${index}`);
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      modal.setAttribute('style', 'display: none');
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop +
        ((document.documentElement && document.documentElement.scrollTop) || 0);

    if (documentHeight - windowHeight - scrollPosition < 1) {
      this.showMore = true;
    }
  }

  showText() {
    this.isShown = true;
  }

  hideText() {
    this.isShown = false;
  }

  constructor(private apiService: UnsplashService) {}
}
