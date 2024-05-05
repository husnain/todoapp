import { z } from "zod"
import { login, getSession } from "@/services/actions/auth"

export default async function Login() {
    const session = await getSession();

    return (
        <section>
            <form 
            // onSubmit={form.handleSubmit(onSubmit)} 
            action={async (formData: FormData) => {
                "use server"
                const resp = await login(formData);
                return resp;
            }}
            method="post" >
                <label>Username</label>
                <input type="text" name="username" />
                <label>Password</label>
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </section>
    )
}