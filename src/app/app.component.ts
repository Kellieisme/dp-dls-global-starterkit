import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconRegistryModule } from '@dasdigitalplatform/dls-angular/icon-registry';
import { CommonModule } from '@angular/common';
import { ThemeToggleModule } from '@dasdigitalplatform/dls-angular/theme-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainNavComponent } from "./main-nav/main-nav.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    CommonModule,
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
