"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function QuantidadeTotalItens() {
    const [quantidadeTotal, setQuantidadeTotal] = useState(0);
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user?.id) {
            // Busca a quantidade total de itens do usuário
            fetch("/api/quantidadeItens")
                .then((response) => response.json())
                .then((data) => {
                    if (data.quantidadeTotal !== undefined) {
                        setQuantidadeTotal(data.quantidadeTotal);
                    }
                })
                .catch((error) => {
                    console.error("Erro ao buscar quantidade de itens:", error);
                });
        }
    }, [session]);

    return (
        <div className="text-2xl font-bold">{quantidadeTotal}</div>
    );
}