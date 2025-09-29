import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-switch',
    imports: [MatSlideToggleModule, MatCardModule, MatFormFieldModule, MatIcon],
    templateUrl: './switch.component.html',
    styleUrl: './switch.component.scss',
    standalone: true
})
export class SwitchComponent {

}
