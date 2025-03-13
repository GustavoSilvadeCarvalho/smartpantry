"use client";

import Link from "next/link";
import { useState } from "react";

import { toast } from "sonner"

import { redirect } from "next/navigation";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
            return (
                toast("Falha ao cadastrar", {
                    description: "Email em uso",
                })
            )
        } else {
            return redirect("/login");
        }
    };

    return (
        <form onSubmit={handleRegister} className="flex flex-col items-center gap-4 p-4">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" className="w-full p-2 border rounded" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" className="w-full p-2 border rounded" />
            <button type="submit" className="w-full p-2 bg-green-600 text-white rounded cursor-pointer">Cadastrar</button>
            <Link className="w-full text-center p-2 border border-green-600 rounded" href="/login">
                <button className="text-center text-green-600 cursor-pointer">login</button>
            </Link>
        </form>
    );
}
