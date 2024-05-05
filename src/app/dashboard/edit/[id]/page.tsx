import { addTodo } from '@/services/actions/addTodo'
import { getTodo } from "@/services/actions/getTodo"
import { redirect } from 'next/navigation'
import { getSession } from "@/services/actions/auth"


export default async function EditForm({ params }: { params: { id: number } }) {
    // const { toast } = useToast()
    async function create(formData: FormData) {
        'use server';
        const cookies = await getSession()
        const title = formData.get('title');
        const description = formData.get('description');
        var completed = false;
        const todo = {
            title,
            description,
            completed
        }
        const update = await fetch(`http://127.0.0.1:8000/todo/${params.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
        const data = await update.json()
        if (data.status === 'success') {
            console.log('Todo updated')
            redirect("/dashboard")
        } else {
            console.log('Failed to update todo')
        }
      }

    const todo = await getTodo(params.id)
    return (
        <form action={create}>
            <label>Title</label>
            <input type="text" name="title" defaultValue={todo.data.title}/>
            <br />
            <label>Description</label>
            <input type="text" name="description" defaultValue={todo.data.description}/>
            <br />
            <label>Completed</label>
            <input type="checkbox" name="completed" defaultChecked={todo.data.completed}/>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}