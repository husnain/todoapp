"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { useForm } from "react-hook-form"
  import { z } from "zod"
  import { addTodo } from '@/services/actions/addTodo'
  import { useToast } from "@/components/ui/use-toast"

  const formSchema:any = z.object({
    title: z.string().nonempty().default(''),
    description: z.string().nonempty().default(''),

  })

export default function Create() {
    const form = useForm();
    const { toast } = useToast()
    async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
        const todo: CreateTodoResponse = await addTodo(values)
        if (todo.status === 'success') {
            toast({
                title: 'Todo created',
                description: 'Todo has been created',
            })
        } else {
            toast({
                title: 'Failed to create todo',
                description: 'Todo has not been created',
            })
        }
    }
    return (
        <main>
            <h1>Create</h1>
            {/* <Card>
                <CardHeader>
                    <CardTitle>Create Todo</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="description" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card> */}
        </main>
    )
}