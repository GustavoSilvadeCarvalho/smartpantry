import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { nomeItem, categoria, quantidade, dataValidade, userId } =
      await request.json();

    // Verifica se o item já existe
    let item = await prisma.item.findFirst({
      where: { nome: nomeItem },
    });

    // Se o item não existir, cria um novo
    if (!item) {
      item = await prisma.item.create({
        data: {
          nome: nomeItem,
          categoria: categoria,
        },
      });
    }

    // Adiciona o item à dispensa do usuário
    await prisma.userItem.create({
      data: {
        user_id: userId, // ID do usuário logado
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
