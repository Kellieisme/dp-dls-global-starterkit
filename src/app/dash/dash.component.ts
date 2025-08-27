import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrl: './dash.component.scss',
    imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
],
    standalone: true
})
export class DashComponent {}
