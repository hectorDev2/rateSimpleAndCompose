import Header from "./components/Header";
import RateCompose from "./components/RateCompose";
import RateSimple from "./components/RateSimple";

export default function Home() {
  return (
    <div>
      <Header />
      <h2 className="text-center text-2xl font-bold">
        Interes Simple y compuesto
      </h2>

      <main className="flex min-h-screen  flex-wrap  justify-center gap-9 p-10">
        <RateSimple />
        <RateCompose />
      </main>
    </div>
  );
}
