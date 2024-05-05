"use server"
import { cookies } from "next/headers";

export async function getTodos() {
    var access_token = cookies().get("access_token").value;
    const response = await fetch('http://127.0.0.1:8000/todos/', {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
        next: { tags: ['get_todos'] }

    }
    );
    const resp = await response.json();
    
    return resp;
}