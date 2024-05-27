/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
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
      </div>
    </header>
  );
}
