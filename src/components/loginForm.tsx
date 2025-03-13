"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner"

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            return (
                toast("Falha no login", {
                    description: "Email ou senha incorretos",
                })
            )
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col gap-4 p-4 items-center">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" className="w-full p-2 border rounded" />
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded cursor-pointer">Entrar</button>
            <Link className="w-full text-center p-2 border border-blue-600 rounded" href="/register">
                <button className="text-blue-600 cursor-pointer">Registrar</button>
            </Link>
        </form>
    );
}
