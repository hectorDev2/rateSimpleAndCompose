import Header from "@/app/components/Header";
import AnualidadAnticipada from "../components/AnualidadAnticipada";

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
        <AnualidadAnticipada />
      </div>
    </>
  );
}
