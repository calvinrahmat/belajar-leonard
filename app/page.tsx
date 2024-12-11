"use client";

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
import React from "react"
import cardData from "./data/card";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (

    <div>
      <h1 className="flex justify-center p-8 text-[60px]"> Belajar ShadcnUI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border" />
       </div>

        <div>
          <Button>Pertama</Button>
          <Button variant="secondary">Kedua</Button>
          <Button variant="destructive">Ketiga</Button>
          <Button variant="outline">Keempat</Button>
          <Button variant="ghost">Kelima</Button>
        </div>

        <div>
          {cardData.map(
            (
              {cardTitle, cardDescription, cardContent, cardFooter}, index
            ) => (
              <Card key={index}>
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
