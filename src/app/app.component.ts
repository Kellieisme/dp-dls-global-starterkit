import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeToggleService } from '@jeppesen-foreflight/dp-dls-global-angular/theme-toggle';
import { Subscription } from 'rxjs';
import { MainNavComponent } from "./main-nav/main-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainNavComponent],
  providers: [ThemeToggleService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit, OnDestroy {
  currentTheme!: string;

  private themeSubscription: Subscription = new Subscription;

  constructor(private themeToggleService: ThemeToggleService) {}

  ngOnInit() {
    // Subscribe to theme changes
    this.themeSubscription = this.themeToggleService.themeChanged$.subscribe((theme: any) => {
      this.currentTheme = theme;
      console.log('Theme changed to:', theme);
    });
  }

  toggleTheme() {
    // Call the toggleTheme method from the service
    this.themeToggleService.toggleTheme();
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
