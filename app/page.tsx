"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import cardData from "./data/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <h1 className="flex justify-center text-[100px]">ShadcnUI sampe JAGO</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <Button>Pertama</Button>
          <Button variant="secondary">Kedua</Button>
          <Button variant="destructive">Ketiga</Button>
          <Button variant="outline">Keempat</Button>
          <Button variant="ghost">Kelima</Button>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:gr-cols-2 lg:grid-cols-3 gap-5 p-2">
          {cardData.map(
            (
              { cardTitle, cardDescription, cardContent, cardFooter },
              index
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
                  <Button variant="outline">Photo</Button>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-50">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
