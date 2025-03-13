import { Toaster } from "@/components/ui/sonner"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <main>{children}</main>
            <Toaster />
        </section>
    )
}