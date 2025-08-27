import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DragNDropComponent } from './components/drag-n-drop/drag-n-drop.component';
import { FormComponent } from './components/form/form.component';
import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './components/tables/table/table.component';
import { TableCdkComponent } from './components/tables/table-cdk/table-cdk.component';
import { TreeComponent } from './components/tree/tree.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChipsComponent } from './components/chips/chips.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TypographyComponent } from './typography/typography.component';
import { SelectComponent } from './components/select/select.component';
import { SideSheetComponent } from './components/sidesheet/sidesheet.component';
import { SwitchComponent } from './components/switch/switch.component';
import { BadgeComponent } from './components/badge/badge.component';
import { InputComponent } from './components/input/input.component';
import { CardsComponent } from './components/cards/cards.component';
import { DialogContentExample } from './components/dialog/dialog.component';
import { ListComponent } from './components/list/list.component';
import { Template1Component } from './template-1/template-1.component';
import { DevicesComponent } from './template-4/devices.component';
import { ComponentsComponent } from './components/components.component';
import { Template3Component } from './template-3/template-3.component';
import { Template2Component } from './template-2/template-2.component';
import { VersionsComponent } from './versions/versions.component';


export const routes: Routes = [
    { path: '', redirectTo: 'dash', pathMatch: 'full'},
    { path: 'versions', component: VersionsComponent },
    { path: 'dash', component: DashComponent },
    { path: 'badge', component: BadgeComponent},
    { path: 'button', component: ButtonsComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'chip', component: ChipsComponent },
    { path: 'dialog', component: DialogContentExample },
    { path: 'date-picker', component: DatepickerComponent },
    { path: 'drag-n-drop', component: DragNDropComponent },
    { path: 'form', component: FormComponent },
    { path: 'list', component: ListComponent },
    { path: 'menu' , component: MenuComponent },
    { path: 'table', component: TableComponent },
    { path: 'table-cdk', component: TableCdkComponent },
    { path: 'tree', component: TreeComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'select', component: SelectComponent },
    { path: 'sidesheet', component: SideSheetComponent },
    { path: 'switch', component: SwitchComponent },
    { path: 'input', component: InputComponent},
    { path: 'template-1', component: Template1Component },
    { path: 'template-4', component: DevicesComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'template-3', component: Template3Component },
    { path: 'template-2', component: Template2Component }
];
