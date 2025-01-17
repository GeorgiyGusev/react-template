import { useLoaderData } from "react-router";
import type { Resourse } from "@/entities/resourse-item";
import { Header } from "@/widgets/header";
import React from "react";
import { ResourceList } from "@/widgets/resourse-list";
import { Clicker } from "@/widgets/clicker";
import { Button, buttonVariants } from "@/shared/shadcn/components/ui/button";
import { Mail } from "lucide-react";


export default function Welcome() {
  const resources = useLoaderData<Resourse[]>()

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <Header/>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <ResourceList resources={resources}/>
        </div>
        <Clicker/>
        <p className="text-gray-300">
          Powered by sensei kowlad
        </p>
        <Button variant="destructive">
          <Mail/> Login with Email
        </Button>
      </div>
    </main>
  )
}
