import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ChefHat, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Dados de exemplo
const suggestedRecipes = [
    {
        id: 1,
        title: "Risoto de Cogumelos",
        image: "/placeholder.svg?height=100&width=100",
        prepTime: "30 min",
        cuisine: "Italiana",
        matchPercentage: 95,
    },
    {
        id: 2,
        title: "Salada de Quinoa",
        image: "/placeholder.svg?height=100&width=100",
        prepTime: "20 min",
        cuisine: "Vegetariana",
        matchPercentage: 85,
    },
    {
        id: 3,
        title: "Frango ao Curry",
        image: "/placeholder.svg?height=100&width=100",
        prepTime: "45 min",
        cuisine: "Indiana",
        matchPercentage: 80,
    },
]

export function RecipeSuggestions() {
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {suggestedRecipes.map((recipe) => (
                    <Card key={recipe.id} className="flex flex-col">
                        <div className="relative">
                            <div className="absolute top-2 right-2 z-10">
                                <Badge className="font-bold" variant="secondary">
                                    {recipe.matchPercentage}% match
                                </Badge>
                            </div>
                            <Image
                                src={recipe.image || "/placeholder.svg"}
                                alt={recipe.title}
                                width={500}
                                height={200}
                                className="h-32 w-full object-cover rounded-t-lg"
                            />

                        </div>
                        <CardHeader className="p-4 pb-0">
                            <CardTitle className="text-lg">{recipe.title}</CardTitle>
                            <CardDescription>
                                <div className="flex items-center gap-2 mt-1">
                                    <Clock className="h-3.5 w-3.5" />
                                    <span>{recipe.prepTime}</span>
                                    <ChefHat className="h-3.5 w-3.5 ml-2" />
                                    <span>{recipe.cuisine}</span>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-2 text-sm">
                            Uma deliciosa receita fácil de preparar com os ingredientes disponíveis na sua despensa.
                        </CardContent>
                        <CardFooter className="p-4 pt-0 mt-auto">
                            <Button variant="outline" size="sm" className="w-full">
                                Ver Receita
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="mt-4 text-center">
                <Link href="/dashboard">
                    <Button variant="link" className="gap-1">
                        Ver todas as receitas
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

