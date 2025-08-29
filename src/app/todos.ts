"use server";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

let todos: Todo[] = [];

export async function getTodos(): Promise<Todo[]> {
  return todos;
}

export async function addTodo(formData: FormData): Promise<void> {
  const text = formData.get("text") as string;
  if (!text?.trim()) return;

  const newTodo: Todo = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };

  todos.push(newTodo);
}

export async function toggleTodo(formData: FormData): Promise<void> {
  const id = formData.get("id") as string;
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}

export async function deleteTodo(formData: FormData): Promise<void> {
  const id = formData.get("id") as string;
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
}
