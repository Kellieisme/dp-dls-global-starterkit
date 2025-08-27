import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-versions',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './versions.component.html',
  styleUrl: './versions.component.scss'
})
export class VersionsComponent {

}
