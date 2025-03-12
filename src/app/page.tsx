import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="flex h-16 justify-between items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold">SmartPantry</h1>
          <Link href="/dashboard">
            <Button>Entrar</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="flex flex-col md:flex-row py-12 md:py-24 lg:py-32 px-10 md:px-12 lg:px-18">
          <div className="flex flex-col justify-center space-y-4 p-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gerencie seus alimentos de forma inteligente</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">SmartPantry ajuda você a rastrear mantimentos, receber notificações de vencimento e sugerir receitas para evitar desperdícios.</p>
            <Link href="/">
              <Button className="py-6">
                Começar agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex">
            <Image
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              src="/placeholder.svg"
              alt="Placeholder"
              width={700}
              height={500}
            />
          </div>
        </section>

        <section className="flex flex-col items-center w-full py-12 md:py-24 lg:py-32 px-10 md:px-12 lg:px-18 bg-gray-100 dark:bg-gray-800">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Principais Recursos</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">SmartPantry oferece um conjunto completo de ferramentas para gerenciar sua despensa.</p>
          </div>

          <div className="max-w-5xl flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 mt-8">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm text-center">
              <div className="p-2 rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Gestão de Estoque</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Organize todos os seus produtos com facilidade, incluindo datas de validade e quantidades.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm text-center">
              <div className="p-2 rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Notificações</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Receba alertas sobre produtos próximos ao vencimento para reduzir o desperdício.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm text-center">
              <div className="p-2 rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Sugestão de Receitas</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Descubra receitas baseadas nos ingredientes disponíveis em sua despensa.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="flex h-16 justify-center items-center px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2021 SmartPantry. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
