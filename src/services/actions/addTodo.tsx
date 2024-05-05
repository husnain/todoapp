"use server"
// import { cookies } from "next/headers";
// import { redirect } from 'next/navigation'
import { getSession } from "@/services/actions/auth"

export async function addTodo(formData: CreateTodo) {
    var title = formData.title
    var description = formData.description
    var completed = false
    const todo = {
        title,
        description,
        completed
    }
    const cookies = await getSession()
    
    const resp = await fetch('http://127.0.0.1:8000/todo/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + cookies,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: todo.title,
            description: todo.description,
            completed: todo.completed,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        })
    })
    const data = await resp.json()
    return data
}