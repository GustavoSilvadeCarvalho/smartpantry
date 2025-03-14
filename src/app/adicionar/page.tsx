"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

export default function AdicionarItem() {
    const [nomeItem, setNomeItem] = useState("");
    const [categoria, setCategoria] = useState("");
    const [quantidade, setQuantidade] = useState(1);
    const [dataValidade, setDataValidade] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { data: session } = useSession();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação básica dos campos
        if (!nomeItem || !categoria || !quantidade || !dataValidade) {
            toast("Erro no formulário", {
                description: "Por favor, preencha todos os campos.",
            });
            return;
        }

        if (!session?.user?.id) {
            toast("Erro de autenticação", {
                description: "Você precisa estar logado para adicionar itens.",
            });
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/api/adicionarItem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nomeItem,
                    categoria,
                    quantidade,
                    dataValidade,
                    userId: session.user.id, // Passa o ID do usuário logado
                }),
            });

            const result = await response.json();

            if (response.ok) {
                toast("Sucesso", {
                    description: "Item adicionado com sucesso!",
                });
                router.push("/dashboard"); // Redireciona para o dashboard após o sucesso
            } else {
                toast("Erro", {
                    description: result.error || "Erro ao adicionar item.",
                });
            }
        } catch (error) {
            console.error("Erro ao adicionar item:", error);
            toast("Erro no servidor", {
                description: "Ocorreu um erro ao tentar adicionar o item. Tente novamente mais tarde.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Adicionar Item à Dispensa</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="nomeItem">Nome do Item</Label>
                    <Input
                        id="nomeItem"
                        type="text"
                        value={nomeItem}
                        onChange={(e) => setNomeItem(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="categoria">Categoria</Label>
                    <Input
                        id="categoria"
                        type="text"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="quantidade">Quantidade</Label>
                    <Input
                        id="quantidade"
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(Number(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="dataValidade">Data de Validade</Label>
                    <Input
                        id="dataValidade"
                        type="date"
                        value={dataValidade}
                        onChange={(e) => setDataValidade(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Adicionando..." : "Adicionar"}
                </Button>
            </form>
        </div>
    );
}