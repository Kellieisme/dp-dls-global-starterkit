import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-input',
    imports: [FormsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, ReactiveFormsModule, MatAutocompleteModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    standalone: true
})
export class InputComponent {
    myControl = new FormControl('');
    options: string[] = ['One', 'Two', 'Three'];
}
