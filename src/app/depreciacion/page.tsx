"use client";
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
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Component() {
  const [costoInicial, setCostoInicial] = useState(200000);
  const [valorSalvamento, setValorSalvamento] = useState(20000);
  const [vidaUtil, setVidaUtil] = useState(6);
  const [depreciacionAnual, setDepreciacionAnual] = useState(0);

  useEffect(() => {
    calcularDepreciacionLineal(costoInicial, valorSalvamento, vidaUtil);
    console.log(depreciacionAnual);
  }, [costoInicial, valorSalvamento, vidaUtil]);

  function calcularDepreciacionLineal(
    costoInicial: number,
    valorSalvamento: number,
    vidaUtil: number
  ) {
    let depreciacionAnual = (costoInicial - valorSalvamento) / vidaUtil;
    setDepreciacionAnual(depreciacionAnual);
  }
  return (
    <>
      <Header
        routes={[
          {
            name: "Depreciacion lineal",
            href: "/depreciacion",
          },
        ]}
        title="Depreciacion"
      />
      <div className="max-w-md mx-auto my-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">
            Calculadora de Depreciación Lineal
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="initialValue"
                className="block text-sm font-medium text-gray-700"
              >
                Valor Inicial del Activo
              </label>
              <div className="mt-1">
                <Input
                  id="initialValue"
                  type="number"
                  value={costoInicial}
                  onChange={(e) => setCostoInicial(Number(e.target.value))}
                  placeholder="Ingrese el valor inicial"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lifespan"
                className="block text-sm font-medium text-gray-700"
              >
                Vida Útil del Activo (años)
              </label>
              <div className="mt-1">
                <Input
                  id="lifespan"
                  value={vidaUtil}
                  type="number"
                  onChange={(e) => setVidaUtil(Number(e.target.value))}
                  placeholder="Ingrese la vida útil en años"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lifespan"
                className="block text-sm font-medium text-gray-700"
              >
                valor de rescate
              </label>
              <div className="mt-1">
                <Input
                  id="valorSalvamento"
                  type="number"
                  value={valorSalvamento}
                  onChange={(e) => setValorSalvamento(Number(e.target.value))}
                  placeholder="valor de rescate"
                />
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full">
                Calcular Depreciación Anual
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <h2 className="text-lg font-medium mb-2">Resultado</h2>
            <div className="bg-gray-100 rounded-md p-4">
              <p className="text-4xl font-bold">{depreciacionAnual}</p>
              <p className="text-gray-500">Depreciación Anual</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-medium mb-2">Tabla de Depreciación</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Año</TableHead>
                  <TableHead>Depreciación</TableHead>
                  <TableHead>Valor en Libros</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow key={0}>
                  <TableCell>0</TableCell>
                  <TableCell>{depreciacionAnual}</TableCell>
                  <TableCell>{costoInicial}</TableCell>
                </TableRow>
                {Array.from({ length: vidaUtil }, (_, i) => (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{depreciacionAnual}</TableCell>
                    <TableCell>
                      {costoInicial - depreciacionAnual * (i + 1)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
