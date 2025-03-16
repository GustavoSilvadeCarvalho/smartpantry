"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, ShoppingCart, Utensils } from "lucide-react";
import { useSession } from "next-auth/react";

interface Item {
    id: number;
    name: string;
    category: string;
    expirationDate: string;
    daysLeft: number;
}

export function ExpiringItems() {
    const [itens, setItens] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user?.id) {
            fetch("/api/itens")
                .then((response) => response.json())
                .then((data) => {
                    if (data.itens) {
                        setItens(data.itens);
                    }
                })
                .catch((error) => {
                    console.error("Erro ao buscar itens:", error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [session]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR");
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Validade</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {itens.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{formatDate(item.expirationDate)}</TableCell>
                            <TableCell>
                                {item.daysLeft <= 3 ? (
                                    <Badge variant="destructive" className="flex gap-1 items-center w-fit">
                                        <AlertCircle className="h-3 w-3" />
                                        {item.daysLeft} dias
                                    </Badge>
                                ) : (
                                    <Badge variant="secondary" className="flex gap-1 items-center w-fit">
                                        {item.daysLeft} dias
                                    </Badge>
                                )}
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">
                                        <Utensils className="h-3 w-3 mr-1" />
                                        Usar
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <ShoppingCart className="h-3 w-3 mr-1" />
                                        Comprar
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}