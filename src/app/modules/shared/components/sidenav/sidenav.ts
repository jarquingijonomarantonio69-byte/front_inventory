import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../../material-module';
import { RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, MaterialModule, RouterOutlet],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav {

  mobileQuery: MediaQueryList;
  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
  
}
