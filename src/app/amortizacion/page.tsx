import React from "react";
import Header from "../components/Header";
import RateSimple from "../components/RateSimple";
import RateCompose from "../components/RateCompose";

export default function Amortizacion() {
  return (
    <>
      <h2 className="text-center text-2xl font-bold">
        Interes Simple y compuesto
      </h2>

      <main className="flex min-h-screen  flex-wrap  justify-center gap-9 p-20">
        <RateSimple />
        <RateCompose />
      </main>
    </>
  );
}
