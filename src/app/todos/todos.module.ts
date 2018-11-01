import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { TodoComponent } from "./todo.component";
import { TodosComponent } from "./todos.component";
import { TodosFiltersComponent } from "./filter/filters.component";
import { TodosPageComponent } from "./todos-page/todos-page.component";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, BsDatepickerModule.forRoot()],
    exports: [TodosComponent, TodosFiltersComponent, TodosPageComponent],
    declarations: [
        TodoComponent,
        TodosComponent,
        TodosFiltersComponent,
        TodosPageComponent
    ]
})
export class TodosModule {}
