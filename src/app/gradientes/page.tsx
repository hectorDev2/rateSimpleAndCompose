"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Header from "../components/Header";

export default function Component() {
  const [capital, setCapital] = useState(50000);
  const [initialCounter, setInitialCounter] = useState(150000);
  const [finalValue, setFinalValue] = useState(0);
  const [gradient, setGradient] = useState(10000);
  const [period, setPeriod] = useState(24);
  const [interestRate, setInterestRate] = useState(0.03);
  const [gradients, setGradients] = useState<any[]>([]);

  const calculateArithmeticGradient = () => {
    // Define the values

    // Calculate the common terms
    let commonTerm1 = Math.pow(1 + interestRate, period) - 1;
    let commonTerm2 = interestRate * Math.pow(1 + interestRate, period);

    // Calculate the finterestRaterst part of the formula
    let part1 = initialCounter * (commonTerm1 / commonTerm2);

    // Calculate the second part of the formula
    let part2_1 = commonTerm1 / commonTerm2;
    let part2_2 = period / Math.pow(1 + interestRate, period);
    let part2 = (gradient / interestRate) * (part2_1 - part2_2);

    // Calculate P
    let P = part1 + part2;
    setFinalValue(P);
  };
  const calculateCounter = (n: number) => {
    const counter = initialCounter + (n - 1) * gradient;
    return counter;
  };

  useEffect(() => {
    calculateArithmeticGradient();
    // calculateCounter();
  }, [initialCounter, finalValue, period, interestRate]);

  useEffect(() => {
    const gradients = [];
    for (let i = 1; i <= period; i++) {
      const counter = calculateCounter(i);
      gradients.push(counter);
    }
    setGradients(gradients);
  }, [period]);
  return (
    <>
      <Header
        title="gradientes"
        routes={[
          {
            name: "gradientes",
            href: "/gradientes",
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <Card className="w-full max-w-xl">
          <CardHeader>
            <CardTitle>Arithmetic Gradient Calculator</CardTitle>
            <CardDescription>
              Calculate the periodic gradients of an arithmetic gradient.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="initialValue">Primer couta</Label>
                <Input
                  id="initialValue"
                  type="number"
                  value={initialCounter}
                  onChange={(e) => setInitialCounter(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="finalValue">Monto en la ultima cuenta</Label>
                <Input
                  id="finalValue"
                  type="number"
                  value={finalValue}
                  onChange={(e) => setFinalValue(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="initialValue">periodos</Label>
                <Input
                  id="period"
                  type="number"
                  value={period}
                  onChange={(e) => setPeriod(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interestRate">interes</Label>
                <Input
                  id="interestRate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
              </div>
            </div>

            <Button onClick={calculateArithmeticGradient}>Calculate</Button>
          </CardContent>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead>Gradient</TableHead>
                  <TableHead>interes</TableHead>
                  <TableHead>Abonado</TableHead>
                  <TableHead>Saldo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradients.map((gradient, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{gradient}</TableCell>
                    <TableCell>{interestRate * capital}</TableCell>
                    <TableCell>{initialCounter}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
