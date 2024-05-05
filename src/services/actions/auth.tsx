"use server"
import { z } from "zod"
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from 'next/navigation'

const formSchema = z.object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    username: z.string().length(3, {
        message: "Username must be at least 3 characters.",
    })
})

export async function login(formData: FormData) {
    // &scope=&client_id=&client_secret=
    formData.append("scope", "");
    formData.append("client_id", "");
    formData.append("client_secret", "");


    const resp = await fetch('http://127.0.0.1:8000/api/oauth/login', {
        method: "POST",
        body: formData
    })
    if (resp) {
        const data = await resp.json()
        if (data.access_token) {
            cookies().set("access_token", data.access_token)
        }
        redirect("/dashboard")
    } else {
        return NextResponse.redirect("/login")
    }
}

export async function logout() {
    "use server"
    cookies().delete("access_token")
}

export async function auth(req: NextRequest) {
    const access_token = cookies().get("access_token")
    if (!access_token) {
        return null
    }
    return { access_token }
}


export async function getSession() {
    const session = cookies().get("access_token");
    if (!session) return null;
    return session.value;
  }