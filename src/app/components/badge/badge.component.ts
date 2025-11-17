import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-badge',
    imports: [MatBadgeModule, MatButtonModule, MatIconModule],
    templateUrl: './badge.component.html',
    styleUrl: './badge.component.scss',
  standalone: true
})
export class BadgeComponent {
    hidden = false;

    toggleBadgeVisibility() {
      this.hidden = !this.hidden;
    }
  }