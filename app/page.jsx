"use client"

import { useState } from "react"
import { Leaf, AlertTriangle, ThumbsDown } from "lucide-react"

export default function Home() {
  const [formState, setFormState] = useState({
    type: "",
    brand: "",
    priceRange: [20000, 80000],
    fuelEfficiency: "",
    ecoRating: "",
  })

  const handlePriceChange = (e) => {
    const value = Number.parseInt(e.target.value, 10)
    setFormState({
      ...formState,
      priceRange: [value, formState.priceRange[1]],
    })
  }

  const handleMaxPriceChange = (e) => {
    const value = Number.parseInt(e.target.value, 10)
    setFormState({
      ...formState,
      priceRange: [formState.priceRange[0], value],
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Scroll to results
    document.getElementById("results").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-green-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">Meilleurs SUV écolos</span>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="/" className="hover:underline">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Comment ça marche
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    À propos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Trouvez le SUV le plus écologique pour vos besoins</h1>
          <p className="text-gray-600 text-center mb-8">
            Comparez les SUVs les plus respectueux de l'environnement et trouvez celui qui correspond à vos critères.
          </p>

          {/* Search Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Filtres de recherche</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium mb-1">
                    Type de véhicule
                  </label>
                  <select
                    id="type"
                    className="w-full p-2 border rounded"
                    value={formState.type}
                    onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="compact-suv">SUV Compact</option>
                    <option value="mid-suv">SUV Intermédiaire</option>
                    <option value="full-suv">SUV Grand Format</option>
                    <option value="luxury-suv">SUV Luxe</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="brand" className="block text-sm font-medium mb-1">
                    Marque
                  </label>
                  <select
                    id="brand"
                    className="w-full p-2 border rounded"
                    value={formState.brand}
                    onChange={(e) => setFormState({ ...formState, brand: e.target.value })}
                  >
                    <option value="">Sélectionnez une marque</option>
                    <option value="renault">Renault</option>
                    <option value="peugeot">Peugeot</option>
                    <option value="citroen">Citroën</option>
                    <option value="toyota">Toyota</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="bmw">BMW</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1">
                  Fourchette de prix: {formState.priceRange[0].toLocaleString()}€ -{" "}
                  {formState.priceRange[1].toLocaleString()}€
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="minPrice" className="block text-xs text-gray-500">
                      Prix minimum
                    </label>
                    <input
                      type="range"
                      id="minPrice"
                      min="10000"
                      max="150000"
                      step="5000"
                      value={formState.priceRange[0]}
                      onChange={handlePriceChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="maxPrice" className="block text-xs text-gray-500">
                      Prix maximum
                    </label>
                    <input
                      type="range"
                      id="maxPrice"
                      min="10000"
                      max="150000"
                      step="5000"
                      value={formState.priceRange[1]}
                      onChange={handleMaxPriceChange}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fuel" className="block text-sm font-medium mb-1">
                    Efficacité énergétique
                  </label>
                  <select
                    id="fuel"
                    className="w-full p-2 border rounded"
                    value={formState.fuelEfficiency}
                    onChange={(e) => setFormState({ ...formState, fuelEfficiency: e.target.value })}
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="hybrid">Hybride</option>
                    <option value="plugin-hybrid">Hybride Rechargeable</option>
                    <option value="electric">Électrique</option>
                    <option value="efficient-gas">Essence Économique</option>
                    <option value="diesel">Diesel</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="eco" className="block text-sm font-medium mb-1">
                    Impact environnemental
                  </label>
                  <select
                    id="eco"
                    className="w-full p-2 border rounded"
                    value={formState.ecoRating}
                    onChange={(e) => setFormState({ ...formState, ecoRating: e.target.value })}
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="a">A - Très faible impact</option>
                    <option value="b">B - Faible impact</option>
                    <option value="c">C - Impact modéré</option>
                    <option value="d">D - Impact moyen</option>
                    <option value="e">E - Impact élevé</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                Rechercher les SUVs écolos
              </button>
            </form>
          </div>

          {/* Results Section */}
          <div id="results" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Résultats de recherche</h2>
            <div className="bg-red-50 border border-red-200 p-4 rounded-md mb-6 flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
              <div>
                <h3 className="text-red-700 font-medium">Aucun résultat trouvé</h3>
                <p className="text-red-600">Nous n'avons trouvé aucun SUV qui répond à vos critères écologiques.</p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <ThumbsDown className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">La vérité sur les SUVs et l'environnement</h3>
                  <p className="text-gray-700 mb-4">
                    En réalité, aucun SUV n'est véritablement écologique. Leur poids plus élevé, leur aérodynamisme
                    moins efficace et leur consommation supérieure en font des véhicules intrinsèquement moins
                    respectueux de l'environnement que des alternatives plus compactes.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Même les SUVs hybrides ou électriques ont un impact environnemental plus important que leurs
                    équivalents en berline ou en citadine, notamment en raison de leur production qui nécessite plus de
                    matériaux et d'énergie.
                  </p>
                  <p className="text-gray-700 font-medium">Pour un véritable choix écologique, considérez plutôt:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Une voiture compacte ou une citadine</li>
                    <li>Les transports en commun quand c'est possible</li>
                    <li>Le vélo pour les trajets courts</li>
                    <li>Le covoiturage pour réduire l'empreinte par passager</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-2">
              Meilleurs SUV écolos - Un site satirique pour sensibiliser à l'impact environnemental des SUVs
            </p>
            <p className="text-gray-400 text-sm">
              Ce site est une parodie. Aucun SUV n'est réellement écologique, c'est pourquoi notre moteur de recherche
              ne trouve jamais de résultats.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
