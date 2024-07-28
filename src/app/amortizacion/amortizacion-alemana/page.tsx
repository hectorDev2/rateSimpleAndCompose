import Header from "@/app/components/Header";
import ChartAlemana from "../../components/ChartAlemana";
import GermanComponent from "../../components/Alemana";

export default function AmortizationGerman() {
  return (
    <div>
      <h2 className="my-10 text-center text-2xl font-bold">
        Amortizacion Alemana
      </h2>

      <main className="flex min-h-screen  flex-wrap  justify-center gap-9 p-10">
        <GermanComponent />
      </main>
    </div>
  );
}
