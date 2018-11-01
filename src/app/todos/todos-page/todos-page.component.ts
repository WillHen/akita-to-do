import { Component, OnInit } from "@angular/core";
import { initialFilters, VISIBILITY_FILTER } from "../filter/filter.model";
import { Todo } from "../state/todo.model";
import { TodosQuery } from "../state/todos.query";
import { TodosService } from "../state/todos.service";
import { Observable } from "rxjs";
import { ID } from "@datorama/akita";
import { map } from "rxjs/operators";

@Component({
    selector: "app-todos-page",
    templateUrl: "./todos-page.component.html"
})
export class TodosPageComponent implements OnInit {
    todos$: Observable<Todo[]>;
    activeFilter$: Observable<VISIBILITY_FILTER>;
    selectAllDone$: Observable<boolean>;
    filters = initialFilters;
    toDoDate: Date = new Date();

    constructor(
        private todosQuery: TodosQuery,
        private todosService: TodosService
    ) {}

    ngOnInit() {
        this.todos$ = this.todosQuery.selectVisibleTodos$;
        this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
        this.selectAllDone$ = this.todosQuery.selectAllDone$;
    }

    add(input: HTMLInputElement) {
        this.todosService.add(input.value, this.toDoDate);
        input.value = "";
        this.toDoDate = new Date();
    }

    complete(todo: Todo) {
        this.todosService.complete(todo);
    }

    delete(id: ID) {
        this.todosService.delete(id);
    }

    onToDoDateValueChange(event: Date) {
        this.toDoDate = event;
    }

    changeFilter(filter: VISIBILITY_FILTER) {
        this.todosService.updateFilter(filter);
    }
}
