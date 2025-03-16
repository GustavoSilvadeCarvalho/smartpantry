"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export function SheetAdicionar() {
    const [nomeItem, setNomeItem] = useState("");
    const [categoria, setCategoria] = useState("");
    const [quantidade, setQuantidade] = useState(1);
    const [dataValidade, setDataValidade] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { data: session } = useSession();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

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
                    userId: session.user.id,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                toast("Sucesso", {
                    description: "Item adicionado com sucesso!",
                });
                router.push("/dashboard");
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
        <Sheet>
            <SheetTrigger asChild>

                <Button variant="outline"><Plus className="h-6 w-6 text-muted-foreground" />Adicionar</Button>
            </SheetTrigger>
            <SheetContent>
                <form onSubmit={handleSubmit}>
                    <SheetHeader>
                        <SheetTitle>Adicione Itens</SheetTitle>
                        <SheetDescription>
                            Adicione itens a sua dispensa.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="nomeItem" className="text-right">
                                Nome do item
                            </Label>
                            <Input
                                className="col-span-3"
                                type="text"
                                id="nomeItem"
                                value={nomeItem}
                                onChange={(e) => setNomeItem(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="categoria" className="text-right">
                                Categoria
                            </Label>
                            <Input
                                id="categoria"
                                type="text"
                                value={categoria}
                                className="col-span-3"
                                onChange={(e) => setCategoria(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="quantidade" className="text-right">
                                Quantidade
                            </Label>
                            <Input
                                id="quantidade"
                                type="number"
                                value={quantidade}
                                className="col-span-3"
                                onChange={(e) => setQuantidade(Number(e.target.value))}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="dataValidade" className="text-right">
                                Data de Validade
                            </Label>
                            <Input
                                id="dataValidade"
                                type="date"
                                value={dataValidade}
                                className="col-span-3"
                                onChange={(e) => setDataValidade(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Adicionando..." : "Adicionar"}
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </form>
            </SheetContent>
        </Sheet>
    )
}
