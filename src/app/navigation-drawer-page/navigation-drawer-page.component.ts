import { Component } from '@angular/core';
import { NavigationDrawerComponent } from '@jeppesen-foreflight/dp-dls-global-angular/navigation-drawer';
import { UserProfileComponent } from '@jeppesen-foreflight/dp-dls-global-angular/user-profile';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'navigation-drawer-page',
    imports: [NavigationDrawerComponent, UserProfileComponent, MatMenuModule, MatButtonModule, MatDividerModule, MatIconModule],
    templateUrl: './navigation-drawer-page.component.html',
    styleUrl: './navigation-drawer-page.component.scss'
})
export class NavigationDrawerPageComponent {
  toggled = false;

  handleRouteRequest(event: { route?: string; item?: any}){
    if(!event.route){
      console.log('Custom routing for: ', event.item);
    }
  }
}
