// components/AmortizationTable.js
import React from "react";

const calculateAmortization = (
  principal: number,
  annualRate: number,
  months: number
) => {
  const monthlyRate = annualRate / 12 / 100;
  const payments = [];

  for (let i = 1; i <= months; i++) {
    const interestPayment = principal * monthlyRate;
    const principalPayment = i === months ? principal : 0;
    payments.push({
      month: i,
      interest: interestPayment,
      principal: principalPayment,
      total: interestPayment + principalPayment,
    });
  }

  return payments;
};

const AmortizationTable = ({ principal, annualRate, months }: any) => {
  const payments = calculateAmortization(principal, annualRate, months);

  return (
    <table className="text-black">
      <thead>
        <tr>
          <th>Mes</th>
          <th>Interés</th>
          <th>Capital</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <tr key={payment.month}>
            <td>{payment.month}</td>
            <td>{payment.interest.toFixed(2)}</td>
            <td>{payment.principal.toFixed(2)}</td>
            <td>{payment.total.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AmortizationTable;
