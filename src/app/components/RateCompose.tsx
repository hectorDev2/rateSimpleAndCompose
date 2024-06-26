"use client";

import { useEffect, useState } from "react";
import ChartRateCompose from "./ChartRateCompose";
import ChartComparative from "./ChartComparative";

export default function RateCompose() {
  const [rate, setRate] = useState(10);
  const [time, setTime] = useState(12);
  const [capital, setCapital] = useState(10000);
  const [total, setTotal] = useState(capital);

  useEffect(() => {
    setTotal(capital * Math.pow(1 + rate / 100, time));
  }, [rate, time, capital]);
  return (
    <main className="flex flex-col items-center justify-center max-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      <div className="max-w-sm md:max-w-md w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Calculadora de Interés Compuesto
        </h1>
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="time"
              name="time"
              placeholder="Ingresa el tiempo"
              type="number"
            />
          </div>
        </form>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 space-y-2">
          <p className="text-gray-700 dark:text-gray-300">
            El interés compuesto calculado es:
            <span className="font-bold">S./{Math.round(total - capital)}</span>
          </p>
          <div className="w-full max-w-md mx-auto">
            <ChartRateCompose capital={capital} rate={rate} time={time} />
            <div className="flex">
              <label htmlFor="rate">Valor futuro:</label>
              <h2>{Math.round(total)}</h2>
            </div>
            <h2 className="mt-10">Comparamos con el interes Simple</h2>
            <ChartComparative capital={capital} rate={rate} time={time} />
          </div>
        </div>
      </div>
    </main>
  );
}
