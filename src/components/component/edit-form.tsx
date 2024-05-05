import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { z } from "zod"
import { addTodo } from '@/services/actions/addTodo'
import { getTodo } from "@/services/actions/getTodo"
import { FormEvent } from 'react'

const formSchema:any = z.object({
    id: z.number().default(0),
    title: z.string().nonempty().default(''),
    description: z.string().nonempty().default(''),
})

export async function EditForm({ params }: { params: { id: number } }) {
    // const form = useForm();
    const todo = await getTodo(params.id)
    console.log(todo, params)
    // const { toast } = useToast()
    async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        'use server'
        event.preventDefault()
        console.log(event)
        // if (todo.status === 'success') {
        //     toast({
        //         title: 'Todo created',
        //         description: 'Todo has been created',
        //     })
        // } else {
        //     toast({
        //         title: 'Failed to create todo',
        //         description: 'Todo has not been created',
        //     })
        // }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit Todo</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" defaultValue={todo.data.title} />
                    <label>Description</label>
                    <input type="text" name="description" defaultValue={todo.data.description} />
                    <button type="submit">Submit</button>
                </form>
            </CardContent>
        </Card>
    )
}