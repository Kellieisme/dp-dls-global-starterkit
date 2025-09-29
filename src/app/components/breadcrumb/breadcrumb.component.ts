import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbComponent } from "@dasdigitalplatform/dls-angular/breadcrumb";

@Component({
    selector: 'breadcrumb-page',
    imports: [BreadcrumbComponent, MatIcon],
    templateUrl: './breadcrumb.component.html',
    styleUrl: './breadcrumb.component.scss',
  standalone: true
})

export class BreadcrumbPageComponent {
  title = 'Breadcrumb';
  breadcrumbsShort = [
    { label: 'Home', path: './' },
    { label: 'Level 1', path: './level-1' },
    { label: 'Level 2', path: './level-1/level-2' },
    { label: 'Level 3', path: './level-3/level-3' }
  ];
  breadcrumbsLong = [
    { label: 'Home', path: './' },
    { label: 'Level 1', path: './level-1' },
    { label: 'Level 2', path: './level-1/level-2' },
    { label: 'Level 3', path: './level-1/level-2/level-3' },
    { label: 'Level 4', path: './level-1/level-2/level-3/level-4' },
    { label: 'Level 5', path: './level-1/level-2/level-3/level-4/level-5' }
  ];
}
