import { RequestInfo } from "rwsdk/worker";
import { getTodos, toggleTodo, deleteTodo } from "@/app/todos";
import { AddTodoForm } from "@/app/components/AddTodoForm";
import { TodoFilters } from "@/app/components/TodoFilters";

export async function Home({ request }: RequestInfo) {
  const url = new URL(request.url);
  const filter = url.searchParams.get("filter") || "all";

  const allTodos = await getTodos();
  const todos =
    filter === "completed"
      ? allTodos.filter((todo) => todo.completed)
      : filter === "active"
      ? allTodos.filter((todo) => !todo.completed)
      : allTodos;

  const completedCount = allTodos.filter((todo) => todo.completed).length;
  const totalCount = allTodos.length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Todo List
          </h1>

          <div className="mb-6">
            <div className="text-sm text-gray-600 mb-4">
              {completedCount} of {totalCount} tasks completed
            </div>

            <AddTodoForm />
          </div>

          <TodoFilters
            filter={filter}
            totalCount={totalCount}
            completedCount={completedCount}
          />

          <div className="space-y-2">
            {todos.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                {filter === "completed"
                  ? "No completed todos yet!"
                  : filter === "active"
                  ? "No active todos!"
                  : "No todos yet. Add one above!"}
              </p>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center gap-3 p-3 border rounded-md transition-colors ${
                    todo.completed
                      ? "bg-gray-50 border-gray-200"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <form action={toggleTodo}>
                    <input type="hidden" name="id" value={todo.id} />
                    <button
                      type="submit"
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        todo.completed
                          ? "bg-green-500 border-green-500 text-white"
                          : "border-gray-300 hover:border-green-500"
                      }`}
                    >
                      {todo.completed && (
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  </form>

                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.text}
                  </span>

                  <form action={deleteTodo}>
                    <input type="hidden" name="id" value={todo.id} />
                    <button
                      type="submit"
                      className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      title="Delete todo"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
