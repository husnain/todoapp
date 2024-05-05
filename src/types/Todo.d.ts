type TodoItem = {
    title: string;
    description: string;
    completed: boolean;
    id: number;
    created_at: string; // or Date if you prefer to work with Date objects
    updated_at: string; // or Date if you prefer to work with Date objects
    user_id: number;
};
  
  type TodoList = TodoItem[];

  type PagiantedTodos = {
    todos: TodoList;
    count: number;
    next: number;
    previous: number;
  }

type CreateTodo = {
    title: string;
    description: string;
};

type CreateTodoResponse = {
  status: string;
  message: string;
  data: TodoItem;
};