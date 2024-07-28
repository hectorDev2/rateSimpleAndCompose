"use client";

import { useEffect, useState } from "react";
import ChartAlemana from "./ChartAlemana";
import ChartAmerican from "./ChartAmerican";
import AmortizationAmerican from "../amortizacion/amortizacion-americana/page";
import AmortizationTable from "./AmortizationTable";

function PMT(
  tasaInteresAnual: number,
  numeroPeriodos: number,
  capital: number
) {
  const tasaInteresMensual = tasaInteresAnual / 12 / 100;

  if (numeroPeriodos <= 0 || tasaInteresMensual <= 0) {
    return 0; // Maneja casos inválidos
  }

  const pagoMensual =
    (capital * tasaInteresMensual) /
    (1 - Math.pow(1 + tasaInteresMensual, -numeroPeriodos));
  return pagoMensual;
}
function rateMonth(capital: number, rate: number, time: number) {
  return (rate / 100 / time) * capital;
}

export default function AmericanComponent() {
  const [rate, setRate] = useState(11);
  const [time, setTime] = useState(12);
  const [capital, setCapital] = useState(300);
  const [total, setTotal] = useState(capital);
  const [pmt, setPmt] = useState(0);
  const [rate2, setRate2] = useState(11);
  useEffect(() => {
    setTotal(((capital * rate) / 100) * time);

    setPmt(PMT(rate, time, capital));
    setRate2(rateMonth(capital, rate, time));
  }, [rate, time, capital, rate2]);
  return (
    <main className="flex flex-col items-center justify-center max-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      <div className="max-w-sm md:max-w-md w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 space-y-6">
        <form className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="capital"
            >
              Capital:
            </label>
            <input
              value={capital}
              onChange={(e) => setCapital(Number(e.target.valueAsNumber))}
              className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="capital"
              name="capital"
              placeholder="Ingresa el capital"
              type="number"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="rate"
            >
              Tasa de Interés:
            </label>
            <input
              value={rate}
              onChange={(e) => setRate(Number(e.target.valueAsNumber))}
              className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="rate"
              name="rate"
              placeholder="Ingresa la tasa de interés"
              type="number"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="time"
            >
              Tiempo en meses:
            </label>
            <input
              value={time}
              onChange={(e) => setTime(Number(e.target.valueAsNumber))}
              className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="time"
              name="time"
              placeholder="Ingresa el tiempo"
              type="number"
            />
          </div>
        </form>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 space-y-2">
          <p className="text-gray-700 dark:text-gray-300">
            interes mensual es:
            <span className="font-bold">
              S./
              {Math.round(
                ((capital * (rate / 100)) / time + Number.EPSILON) * 100
              ) / 100}
            </span>
          </p>
          <div className="w-full max-w-md mx-auto">
            <AmortizationTable
              principal={capital}
              annualRate={rate}
              months={time}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
