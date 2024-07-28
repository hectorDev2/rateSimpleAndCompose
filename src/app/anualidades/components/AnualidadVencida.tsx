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

export default function AnualidadVencida() {
  const [valorFuturo, setValorFuturo] = useState<number>(0);
  const [initialAmount, setInitialAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(6);
  const [years, setYears] = useState(10);

  function calcularValorFuturo(A: number, i: number, n: number): void {
    let F = A * ((Math.pow(1 + i / 100, n) - 1) / (i / 100));
    setValorFuturo(F);
  }
  useEffect(() => {
    calcularValorFuturo(initialAmount, interestRate, years);
  }, [initialAmount, interestRate, years]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Valor Futuro Anualidad Vencida</CardTitle>
        <CardDescription>
          Calcula el valor futuro de tu inversión
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="initialAmount">Monto Inicial</Label>
            <Input
              id="initialAmount"
              onChange={(e: any) => setInitialAmount(e.target.value)}
              value={initialAmount}
              type="number"
              placeholder="1000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Tasa de Interés Anual</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="interestRate"
                onChange={(e: any) => setInterestRate(e.target.value)}
                value={interestRate}
                type="number"
                placeholder="5"
              />
              %
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="years">Número de Años</Label>
          <Input
            id="years"
            onChange={(e: any) => setYears(e.target.value)}
            value={years}
            type="number"
            placeholder="10"
          />
        </div>
        <Button
          type="button"
          onClick={() =>
            calcularValorFuturo(initialAmount, interestRate, years)
          }
        >
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
    </Card>
  );
}
