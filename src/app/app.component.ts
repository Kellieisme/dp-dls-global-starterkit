import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { ThemeToggleModule } from '@jeppesen-foreflight/dp-dls-global-angular/theme-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainNavComponent } from "./main-nav/main-nav.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    IconRegistryModule,
    ThemeToggleModule,
    MatSidenavModule,
    MainNavComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class AppComponent { }
