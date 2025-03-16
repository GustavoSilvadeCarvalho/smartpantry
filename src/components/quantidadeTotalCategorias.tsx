//igual o quantiade total, mas para categorias

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function QuantidadeTotalCategorias() {
    const [quantidadeTotal, setQuantidadeTotal] = useState(0);
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user?.id) {
            fetch("/api/categorias")
                .then((response) => response.json())
                .then((data) => {
                    if (data.categoriasDiferentes !== undefined) {
                        setQuantidadeTotal(data.categoriasDiferentes);
                    }
                })
                .catch((error) => {
                    console.error("Erro ao buscar quantidade de categorias:", error);
                });
        }
    }, [session]);

    return (
        <div className="text-2xl font-bold">{quantidadeTotal}</div>
    );
}