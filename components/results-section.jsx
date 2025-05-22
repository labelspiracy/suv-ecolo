"use client"

import { AlertTriangle, ThumbsDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ResultsSection() {
  return (
    <div id="results" className="pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Résultats de recherche</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4 mr-2" />
            <div>
              <AlertTitle>Aucun résultat trouvé</AlertTitle>
              <AlertDescription>Nous n'avons trouvé aucun SUV qui répond à vos critères écologiques.</AlertDescription>
            </div>
          </Alert>

          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <ThumbsDown className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">La vérité sur les SUVs et l'environnement</h3>
                <p className="text-gray-700 mb-4">
                  En réalité, aucun SUV n'est véritablement écologique. Leur poids plus élevé, leur aérodynamisme moins
                  efficace et leur consommation supérieure en font des véhicules intrinsèquement moins respectueux de
                  l'environnement que des alternatives plus compactes.
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
        </CardContent>
      </Card>
    </div>
  )
}
