import { ID, guid } from "@datorama/akita";

export type Todo = {
    id: ID;
    title: string;
    completed: boolean;
    date: Date;
};

export function createTodo({ title, date }: Partial<Todo>) {
    return {
        id: guid(),
        title,
        completed: false,
        date
    } as Todo;
}
