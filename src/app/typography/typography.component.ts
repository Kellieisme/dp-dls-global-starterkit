import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';


@Component({
    selector: 'app-typography',
    imports: [MatCardModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatButtonModule ],
    templateUrl: './typography.component.html',
    styleUrl: './typography.component.scss',
    standalone: true
})
export class TypographyComponent {

}
