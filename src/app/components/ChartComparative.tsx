import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComparative = ({ capital, rate, time }: any) => {
  // Generar datos para cada período de tiempo
  const labels = Array.from({ length: time + 1 }, (_, i) => i); // Aquí puedes cambiar time por el número deseado
  const capitalData = labels.map((t) => ((capital * rate) / 100) * t + capital);
  const futureValueData = labels.map(
    (t) => capital * Math.pow(1 + rate / 100, t)
  );

  // Datos para el gráfico
  const data = {
    labels,
    datasets: [
      {
        label: "Valor Futuro(I simple)",
        data: capitalData,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Valor Futuro (I Compuesto)",
        data: futureValueData,
        backgroundColor: "rgba(192, 75, 192, 0.5)",
        borderColor: "rgba(192, 75, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        indexAxis: "x",
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Crecimiento del Capital con Interés Compuesto",
          },
        },
      }}
    />
  );
};

export default ChartComparative;
