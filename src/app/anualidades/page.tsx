import Header from "../components/Header";
import AnualidadVencida from "./components/AnualidadVencida";

export default function Anualidades() {
  return (
    <>
      <Header
        title="Anualidades"
        routes={[
          {
            name: "Anualida vencida",
            href: "/anualidades",
          },
          {
            name: "Anualidad anticipada",
            href: "/anualidades/anualidad-anticipada",
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <AnualidadVencida />
      </div>
    </>
  );
}
