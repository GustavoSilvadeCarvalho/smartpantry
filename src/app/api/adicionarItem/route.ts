import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { nomeItem, categoria, quantidade, dataValidade, userId } =
      await request.json();

    let item = await prisma.item.findFirst({
      where: { nome: nomeItem },
    });

    if (!item) {
      item = await prisma.item.create({
        data: {
          nome: nomeItem,
          categoria: categoria,
        },
      });
    }
    await prisma.userItem.create({
      data: {
        user_id: userId,
        item_id: item.id,
        quantidade: quantidade,
        data_validade: new Date(dataValidade),
      },
    });

    return NextResponse.json(
      { message: "Item adicionado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao adicionar item:", error);
    return NextResponse.json(
      { error: "Erro ao adicionar item." },
      { status: 500 }
    );
  }
}
