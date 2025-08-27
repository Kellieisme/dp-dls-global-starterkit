import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconRegistryModule } from '@design/dls-global-angular/icon-registry';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
    selector: 'app-menu',
    imports: [MatMenuModule, MatDividerModule, MatIconModule, MatButtonModule, IconRegistryModule, MatFormFieldModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    standalone: true
})
export class MenuComponent {

}
