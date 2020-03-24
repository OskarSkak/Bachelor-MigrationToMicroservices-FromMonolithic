import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { animateText } from '../../animations/animations';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [ animateText],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  public ShowLogo: boolean = false;
  public status: boolean = true;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe(res => {
      this.status = res;
      this.ShowLogo = !res;
    })
   }

  ngOnInit(): void {
  }

}
