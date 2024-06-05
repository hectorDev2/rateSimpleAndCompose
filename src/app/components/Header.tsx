/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-[#003366] text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img alt="University Logo" className="h-10 mr-4" src="/logo.png" />
            <h1 className="text-2xl font-bold">
              <span className="text-[#003366]">
                <span className="text-[#fff]">
                  <span className="text-[#003366]">
                    <span className="text-[#fff]">Laboratorio 3 y 4</span>
                  </span>
                </span>
              </span>
            </h1>
          </div>
          <ul className="flex items-center gap-2">
            <li className="hover:underline">
              <Link href="/">Inicio</Link>
            </li>
            <li className="hover:underline">
              <Link href="/amortizacion-frances">amortización frances</Link>
            </li>
            <li className="hover:underline">
              <Link href="/amortizacion-americana">amortización americana</Link>
            </li>
            <li className="hover:underline">
              <Link href="/amortizacion-alemana">amortización alemana</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
