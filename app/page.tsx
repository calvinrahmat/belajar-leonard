"use client";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import cardData from "./data/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    
    <div>
      <h1 className="flex justify-center p-8 text-[100px]"> Belajar ShadcnUI UI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border" />
       </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <Button>Pertama</Button>
          <Button variant="secondary">Kedua</Button>
          <Button variant="destructive">Ketiga</Button>
          <Button variant="outline">Keempat</Button>
          <Button variant="ghost">Kelima</Button>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:gr-cols-2 lg:grid-cols-3 gap-2 p-2">
          {cardData.map(
            (
              {cardTitle, cardDescription, cardContent, cardFooter}, index
            ) => (
              <Card key={index} className="w-70 h-100">
              <CardHeader>
                <CardTitle>{cardTitle}</CardTitle>
                <CardDescription>{cardDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{cardContent}</p>
              </CardContent>
              <CardFooter>
                <p>{cardFooter}</p>
              </CardFooter>
            </Card>
            )
            )}            
        </div>
      </div>
    </div>
  )      
}

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}