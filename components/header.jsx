import Link from "next/link"
import { Leaf } from "lucide-react"

export function Header() {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6" />
            <span className="text-xl font-bold">Meilleurs SUV écolos</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  À propos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
