import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-cards',
    imports: [MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class CardsComponent {

}
