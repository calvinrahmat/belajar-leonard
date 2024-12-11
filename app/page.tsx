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
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border" />
      </div>

      <div>
        <Button>Pertama</Button>
        <Button variant="secondary">Kedua</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
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
  )    
  
}
