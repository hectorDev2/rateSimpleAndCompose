"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";

export default function AnualidadAnticipada() {
  const [valorFuturo, setValorFuturo] = useState<number>(0);
  const [valorAnualidadAnticipada, setValorAnualidadAnticipada] =
    useState<number>(0);
  const [initialAmount, setInitialAmount] = useState(10000000);
  const [interestRate, setInterestRate] = useState(0.02);
  const [years, setYears] = useState(36);

  function calcularValorFuturo() {
    let F =
      initialAmount * ((Math.pow(1 + interestRate, years) - 1) / interestRate);
    setValorFuturo(F);
  }

  function calAnualidadAnticipada() {
    // Calculate the part inside the denominator
    let innerDenominator = 1 - Math.pow(1 + interestRate, -(years - 1));
    innerDenominator = innerDenominator / interestRate;

    // Calculate the whole denominator
    let denominator = 1 + innerDenominator;

    // Calculate A
    let A = initialAmount / denominator;
    console.log(A);
    setValorAnualidadAnticipada(A);
  }
  useEffect(() => {
    calcularValorFuturo();
    calAnualidadAnticipada();
  }, [initialAmount, interestRate, years, valorFuturo]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Valor Futuro Anualidad Vencida</CardTitle>
        <CardDescription>
          Calcula el valor de la anualidad anticipada
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="initialAmount">Monto Inicial</Label>
            <Input
              id="initialAmount"
              onChange={(e: any) => setInitialAmount(Number(e.target.value))}
              value={initialAmount}
              type="number"
              placeholder="1000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Tasa de Interés </Label>
            <div className="flex items-center space-x-2">
              <Input
                id="interestRate"
                onChange={(e: any) => setInterestRate(Number(e.target.value))}
                value={interestRate}
                type="number"
                className="outline-none"
                placeholder="5"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="years">Número de Periodos</Label>
          <Input
            id="years"
            onChange={(e: any) => setYears(Number(e.target.value))}
            value={years}
            type="number"
            placeholder="10"
          />
        </div>
        <Button type="button" onClick={() => calcularValorFuturo()}>
          Calcular Valor Futuro
        </Button>
      </CardContent>
      <CardFooter>
        <div className="p-4 rounded-b-md  text-black font-bold text-2xl">
          <h2 className="">Valor Futuro:</h2>
          <br />
          {valorFuturo}
        </div>
      </CardFooter>
      <CardFooter>
        <div className="p-4 rounded-b-md  text-black font-bold text-2xl">
          <h2 className="">Anualidad:</h2>
          <br />
          {valorAnualidadAnticipada}
        </div>
      </CardFooter>
    </Card>
  );
}
