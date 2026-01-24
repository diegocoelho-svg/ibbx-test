import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-white">
      <Header />

      <main className="flex-1 pt-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}
