import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, ShoppingCart, Package, AlertCircle } from "lucide-react"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { ExpiringItems } from "@/components/dashboard/expiring-items"
import { RecipeSuggestions } from "@/components/dashboard/recipe-suggestions"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/logoutButton"
import QuantidadeTotalItens from "@/components/quantidadeTotal"
import { SheetAdicionar } from "@/components/botaoAdicionar"
import QuantidadeTotalCategorias from "@/components/quantidadeTotalCategorias"

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="space-y-6 px-10">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <div className="flex items-center gap-4">
                    <SheetAdicionar />
                    <LogoutButton />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Itens</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <QuantidadeTotalItens />
                        <p className="text-xs text-muted-foreground">+5 desde a semana passada</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Itens a Vencer</CardTitle>
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-muted-foreground">Nos próximos 7 dias</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Categorias</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <QuantidadeTotalCategorias />
                        <p className="text-xs text-muted-foreground">Tipos de produtos</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Lista de Compras</CardTitle>
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">14</div>
                        <p className="text-xs text-muted-foreground">Itens para comprar</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Itens próximos do vencimento</CardTitle>
                        <CardDescription>Itens que expiram nos próximos dias</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ExpiringItems />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Atividade Recente</CardTitle>
                        <CardDescription>Últimas ações realizadas no sistema</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentActivity />
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Sugestões de Receitas</CardTitle>
                        <CardDescription>Baseadas nos itens disponíveis na sua despensa</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecipeSuggestions />
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}

