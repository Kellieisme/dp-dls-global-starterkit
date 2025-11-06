import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BreadcrumbComponent } from "@jeppesen-foreflight/dp-dls-global-angular/breadcrumb";
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonsComponent } from "./buttons/buttons.component";
import { DialogContentExample } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from "./list/list.component";
import { MenuComponent } from './menu/menu.component';
import { SelectComponent } from './select/select.component';
import { SwitchComponent } from "./switch/switch.component";
import { SideSheetComponent } from './sidesheet/sidesheet.component';
import { InputComponent } from "./input/input.component";
import { TableComponent } from "./tables/table/table.component";
import { MatDividerModule } from '@angular/material/divider';


export interface LabelExample {
  name: string;
}
@Component({
  selector: 'app-components',
  imports: [MatIcon, MatDividerModule, MatButtonModule, BreadcrumbComponent, MatCardModule, ChipsComponent, DatepickerComponent, CheckboxComponent, ButtonsComponent, DialogContentExample, FormComponent, ListComponent, MenuComponent, SelectComponent, SwitchComponent, SideSheetComponent, InputComponent, TableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
  standalone: true
})
export class ComponentsComponent {
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
