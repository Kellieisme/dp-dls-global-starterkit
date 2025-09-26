import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-select',
    imports: [MatIcon, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatCardModule],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
    standalone: true
})
export class SelectComponent {

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}