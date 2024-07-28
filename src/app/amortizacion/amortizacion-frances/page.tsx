import Header from "@/app/components/Header";
import GermanComponent from "../../components/Alemana";
import FrancesComponent from "../../components/Frances";

export default function AmortizationFrances() {
  return (
    <div>
      <h2 className="my-10 text-center text-2xl font-bold">
        Amortizacion Frances
      </h2>

      <main className="flex min-h-screen  flex-wrap items-center justify-center gap-9 p-10">
        <FrancesComponent />
      </main>
    </div>
  );
}
