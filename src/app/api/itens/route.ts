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
    const itens = await prisma.userItem.findMany({
      where: {
        user_id: session.user.id,
        data_validade: {
          gte: new Date(),
        },
      },
      include: {
        item: true,
      },
      orderBy: {
        data_validade: "asc",
      },
    });
    const formattedItems = itens.map((userItem) => ({
      id: userItem.item.id,
      name: userItem.item.nome,
      category: userItem.item.categoria,
      expirationDate: userItem.data_validade.toISOString().split("T")[0],
      daysLeft: Math.ceil(
        (new Date(userItem.data_validade).getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      ),
    }));

    return NextResponse.json({ itens: formattedItems }, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return NextResponse.json(
      { error: "Erro ao buscar itens." },
      { status: 500 }
    );
  }
}
