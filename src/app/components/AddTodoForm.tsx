import { addTodo } from "@/app/todos";

export function AddTodoForm() {
  return (
    <form action={addTodo} className="flex gap-2">
      <input
        type="text"
        name="text"
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Add
      </button>
    </form>
  );
}
