import Header from "@/components/header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <Header />
      <main className="grow">{children}</main>
    </div>
  );
}
