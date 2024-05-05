"use server"
// import { cookies } from "next/headers";
// import { redirect } from 'next/navigation'
import { getSession } from "@/services/actions/auth"

export async function getTodo(todo_id: number) {
    
    const cookies = await getSession()
    
    const resp = await fetch(`http://127.0.0.1:8000/todo/${todo_id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + cookies,
            'Content-Type': 'application/json',
        }
    })
    const data = await resp.json()
    return data
}