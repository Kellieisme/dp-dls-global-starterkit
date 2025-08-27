import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconRegistryModule } from '@design/dls-global-angular/icon-registry';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ThemeToggleModule } from '@design/dls-global-angular/theme-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { UserProfileComponent } from '@design/dls-global-angular/user-profile';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationRailComponent } from '@design/dls-global-angular/navigation-rail';
import { TopAppBarComponent } from '@design/dls-global-angular/top-app-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { filter } from 'rxjs';

const homeRouteMatch = '/home';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [
    MatIconModule, CommonModule, IconRegistryModule, ThemeToggleModule, MatChipsModule,
    MatSidenavModule, MatDividerModule, MatMenuModule, NavigationRailComponent, MatListModule,
    MatButtonModule, MatToolbarModule, RouterModule, UserProfileComponent, TopAppBarComponent, MatButtonModule, MatListModule
],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './main-nav.component.html'
})
export class MainNavComponent {
    showDrawer: boolean = false;
  @ViewChild('sidenavContent', { read: ElementRef, static: false }) sidenavContent!: ElementRef;

  railMenuItems  = [
      {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dash',
    },
        {
      label: 'components',
      icon: 'code',
      route: '/components',
    },
    {
      label: 'Template 1',
      icon: 'favorite',
      route: '/template-1',
    },
    {
      label: 'Template 2',
      icon: 'favorite',
      route: '/template-2',
    },
       {
      label: 'Template 3',
      icon: 'add',
      route: '/template-3',
    },

    {
      label: 'Typography',
      icon: 'type-specimen',
      route: '/typography',
    },
    //   {
    //   label: 'Changelog',
    //   icon: 'favorite',
    //   route: '/versions',
    // },
  ];

  isSidenavOpen: boolean = false;
  router: any;
  selectedLevel1Item: undefined;


  // ngAfterViewInit(): void {
  //   this.router.events
  //     .pipe(
  //       filter((event): event is NavigationEnd => event instanceof NavigationEnd)
  //     )
  //     .subscribe((event: NavigationEnd) => {
  //       this.updateMenuToggledState(event.urlAfterRedirects);
  //       this.showDrawer = event.urlAfterRedirects.includes(drawerPath);
  //       if (isPlatformBrowser(this.platformId)) {
  //         console.log(event.urlAfterRedirects)
  //         window.scrollTo(0, 0)
  //       }
  //       if (this.sidenavContent && this.sidenavContent.nativeElement) {
  //         this.sidenavContent.nativeElement.scrollTop = 0;
  //       }
  //     });
  // }
  // platformId(platformId: any) {
  //   throw new Error('Method not implemented.');
  // }

  // private updateMenuToggledState(currentUrl: string): void {
  //   this.railMenuItems.forEach(item => {
  //     item.toggled = item.route ? currentUrl.includes(item.route) : false;
  //     item.children?.forEach(item => {
  //       item.toggled = item.route ? currentUrl.includes(item.route) : false;
  //     })
  //   }
  //   );
  //   if (currentUrl.includes(homeRouteMatch)) {
  //     this.selectedLevel1Item = undefined;
  //     this.isSidenavOpen = false;
  //   }
  // }

  // onLevel1ItemClick(item: AtmosphereNavRailMenuItem) {
  //   if (item.children && item.children.length > 0) {
  //     this.selectedLevel1Item = item;
  //     this.isSidenavOpen = true;
  //   } else {
  //     this.selectedLevel1Item = undefined;
  //     this.isSidenavOpen = false;
  //   }
  // };

}
