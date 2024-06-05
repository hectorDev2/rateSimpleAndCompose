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

const ChartAlemana = ({ pmt, capital, rate, time }: any) => {
  // Generar datos para cada período de tiempo
  const labels = Array.from({ length: time }, (_, i) => i + 1);
  const capitalData = labels.map((t) => capital / time);
  console.log(Math.round((rate + capital / time + Number.EPSILON) * 100) / 100);
  const futureValueData = labels.map(
    (t, index) => capital - (pmt - rate) * index
  );

  // Datos para el gráfico
  const data = {
    labels,
    datasets: [
      {
        label: "Amortizacion",
        data: capitalData,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Deuda restante",
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
            text: "Crecimiento del Capital con Interés Simple",
          },
        },
      }}
    />
  );
};

export default ChartAlemana;
