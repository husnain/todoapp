import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import Link from 'next/link'
  import { getSession, logout } from "@/services/actions/auth"
  import { redirect } from 'next/navigation'

  
  export default async function TopBar() {
    const cookies = await getSession()
    return (
        <main className="content-center">
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger><Link href="/">Home</Link></MenubarTrigger>
                <MenubarTrigger>
                    <Link href="/dashboard/create">Create</Link>
                </MenubarTrigger>
                <MenubarTrigger>
                    {
                        cookies ? <Link href="/dashboard">Dashboard</Link> : <Link href="/login">Login</Link>
                    }
                
                </MenubarTrigger>
                {
                    cookies ? <MenubarTrigger>
                        <form id="logoutform" action={async () => {
                            "use server"
                            await logout();
                            redirect("/");
                        }} method="post">  
                        <button type="submit">Logout</button>
                        </form>
                    </MenubarTrigger> : ''
                }
                
            </MenubarMenu>
        </Menubar>
        </main>

    );
}