import type { Metadata } from "next";
import TopBar from "@/components/component/topbar";


export const metadata: Metadata = {
  title: "Todo App",
  description: "create by Husnain Ahmed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <main className="container">
        <TopBar />
        {children}
        </main>
  );
}
