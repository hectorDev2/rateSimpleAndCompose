/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

interface HeaderProps {
  routes?: any[];
  title: string;
}

export default function Header({
  routes = [{ name: "Inicio", href: "/" }],
  title,
}: HeaderProps) {
  return (
    <>
      <header className="bg-[#003366] text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img
                alt="University Logo"
                className="h-10 mr-4"
                src="/logo.png"
              />
            </Link>
            <h1 className="text-2xl font-bold">
              <span className="text-[#003366]">
                <span className="text-[#fff]">
                  <span className="text-[#003366]">
                    <span className="text-[#fff]">{title}</span>
                  </span>
                </span>
              </span>
            </h1>
          </div>
          <ul className="flex  items-center gap-x-8">
            {routes.map((route) => (
              <li key={route.name} className="hover:underline">
                <Link href={route.href}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
