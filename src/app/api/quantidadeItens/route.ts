// app/api/quantidadeItens/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Usuário não autenticado." },
      { status: 401 }
    );
  }

  try {
    // Busca a quantidade total de itens do usuário
    const quantidadeTotal = await prisma.userItem.aggregate({
      where: {
        user_id: session.user.id,
      },
      _sum: {
        quantidade: true,
      },
    });

    return NextResponse.json(
      { quantidadeTotal: quantidadeTotal._sum.quantidade || 0 },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao buscar quantidade de itens:", error);
    return NextResponse.json(
      { error: "Erro ao buscar quantidade de itens." },
      { status: 500 }
    );
  }
}
