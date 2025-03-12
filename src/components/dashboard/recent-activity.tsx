import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, Tag, ShoppingCart, Package, Trash2, CookingPot } from "lucide-react"

// Dados de exemplo
const activityItems = [
    {
        id: 1,
        type: "added",
        item: "Cenouras",
        timestamp: "Hoje, 14:32",
        icon: Package,
    },
    {
        id: 2,
        type: "consumed",
        item: "Leite",
        timestamp: "Hoje, 12:15",
        icon: CookingPot,
    },
    {
        id: 3,
        type: "shopping",
        item: "Maçãs",
        timestamp: "Ontem, 18:45",
        icon: ShoppingCart,
    },
    {
        id: 4,
        type: "expired",
        item: "Iogurte",
        timestamp: "Ontem, 10:20",
        icon: Clock,
    },
    {
        id: 5,
        type: "removed",
        item: "Pão",
        timestamp: "2 dias atrás",
        icon: Trash2,
    },
    {
        id: 6,
        type: "tagged",
        item: "Arroz",
        timestamp: "3 dias atrás",
        icon: Tag,
    },
]

export function RecentActivity() {
    return (
        <div className="space-y-8">
            {activityItems.map((activity) => (
                <div className="flex items-start" key={activity.id}>
                    <div className="flex items-center gap-4">
                        <Avatar className="border">
                            <AvatarFallback className="bg-muted">
                                <activity.icon className="h-4 w-4" />
                            </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                                {activity.type === "added" && "Adicionou"}
                                {activity.type === "consumed" && "Consumiu"}
                                {activity.type === "shopping" && "Comprou"}
                                {activity.type === "expired" && "Expirou"}
                                {activity.type === "removed" && "Removeu"}
                                {activity.type === "tagged" && "Categorizou"}
                                <span className="font-bold"> {activity.item}</span>
                            </p>
                            <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

