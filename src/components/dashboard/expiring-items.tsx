import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, ShoppingCart, Utensils } from "lucide-react"

const expiringItems = [
    {
        id: 1,
        name: "Leite Integral",
        expirationDate: "2024-04-05",
        daysLeft: 3,
        category: "Laticínios",
    },
    {
        id: 2,
        name: "Queijo Mussarela",
        expirationDate: "2024-04-12",
        daysLeft: 10,
        category: "Laticínios",
    },
    {
        id: 3,
        name: "Maçãs",
        expirationDate: "2024-04-10",
        daysLeft: 8,
        category: "Frutas",
    },
    {
        id: 4,
        name: "Iogurte Natural",
        expirationDate: "2024-04-07",
        daysLeft: 5,
        category: "Laticínios",
    },
    {
        id: 5,
        name: "Pão de Forma",
        expirationDate: "2024-04-04",
        daysLeft: 2,
        category: "Padaria",
    },
]

export function ExpiringItems() {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("pt-BR")
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
                    {expiringItems.map((item) => (
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
    )
}

