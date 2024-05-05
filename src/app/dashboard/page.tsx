import { getTodos } from '@/services/actions/todo'
import  TodosViewTable  from '@/components/component/all_todos'
import { DataTable } from "@/components/ui/data-table"
import { Todo, columns } from "./columns"

export default async function Dashboard() {
  const all_todos = await getTodos();
  const todos = all_todos.data;
  return (
    <div>
      <h1>Dashboard</h1>
      <main>
        {/* <TodosViewTable todos={todos} /> */}
        <div className="container mx-auto py-10">
        <DataTable columns={columns} data={todos} />
      </div>
      </main>
    </div>
  );
}
