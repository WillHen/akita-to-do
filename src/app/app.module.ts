import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { TodosModule } from "./todos/todos.module";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        TodosModule,
        AkitaNgDevtools.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
