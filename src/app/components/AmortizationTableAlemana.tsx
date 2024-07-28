// pages/amortization.js

import { useState } from "react";

// utils/amortization.js

export function calculateAmortization(
  principal: number,
  annualRate: number,
  months: number
) {
  const monthlyRate = annualRate / 12 / 100;
  const monthlyPrincipal = principal / months;

  const schedule = [];

  for (let month = 1; month <= months; month++) {
    const interest = (principal - (month - 1) * monthlyPrincipal) * monthlyRate;
    const totalPayment = monthlyPrincipal + interest;
    const balance = principal - month * monthlyPrincipal;

    schedule.push({
      month,
      interest: interest.toFixed(2),
      principal: monthlyPrincipal.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      balance: balance.toFixed(2),
    });
  }

  return schedule;
}

export default function AmortizationTableAlemana({ capital, rate, time }: any) {
  const [principal, setPrincipal] = useState(capital);
  const [annualRate, setAnnualRate] = useState(rate);
  const [months, setMonths] = useState(time);
  const [schedule, setSchedule] = useState([]);

  const handleCalculate = () => {
    const result: any = calculateAmortization(principal, annualRate, months);
    setSchedule(result);
  };

  return (
    <div>
      <h1>Tabla de Amortización Alemana</h1>
      <div>
        <label>
          Monto del Préstamo:
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Tasa de Interés Anual (%):
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Plazo (meses):
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calcular</button>

      {schedule.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Mes</th>
              <th>Pago de Intereses</th>
              <th>Pago de Capital</th>
              <th>Pago Total</th>
              <th>Saldo del Préstamo</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map(
              ({ month, interest, principal, totalPayment, balance }) => (
                <tr key={month}>
                  <td>{month}</td>
                  <td>{interest}</td>
                  <td>{principal}</td>
                  <td>{totalPayment}</td>
                  <td>{balance}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
