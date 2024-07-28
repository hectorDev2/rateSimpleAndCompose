"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0MxzjdFTVo7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <nav className="bg-card rounded-lg shadow-md p-4 w-full max-w-md">
        <ul className="space-y-2">
          <li>
            <Link href="/amortizacion">
              <button className="flex items-center justify-between w-full rounded-md bg-card-foreground text-card px-4 py-2 hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none">
                Amortizacion
              </button>
            </Link>
          </li>
          <li>
            <Link href="/anualidades">
              <button className="flex items-center justify-between w-full rounded-md bg-card-foreground text-card px-4 py-2 hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none">
                Anualidades
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
