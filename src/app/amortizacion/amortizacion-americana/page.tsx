import AmericanComponent from "../../components/American";

export default function AmortizationAmerican() {
  return (
    <div>
      <h2 className="my-10 text-center text-2xl font-bold">
        Amortizacion Americana
      </h2>

      <main className="flex min-h-screen  flex-wrap  justify-center gap-9 p-10">
        <AmericanComponent />
      </main>
    </div>
  );
}
