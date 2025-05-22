"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SearchForm() {
  const [formState, setFormState] = useState({
    type: "",
    brand: "",
    priceRange: [20000, 80000],
    fuelEfficiency: "",
    ecoRating: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No need to do anything with the form data
    // The results will always be "no results"

    // Scroll to results
    document.getElementById("results").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Filtres de recherche</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-medium">
                Type de véhicule
              </label>
              <Select value={formState.type} onValueChange={(value) => setFormState({ ...formState, type: value })}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Sélectionnez un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compact-suv">SUV Compact</SelectItem>
                  <SelectItem value="mid-suv">SUV Intermédiaire</SelectItem>
                  <SelectItem value="full-suv">SUV Grand Format</SelectItem>
                  <SelectItem value="luxury-suv">SUV Luxe</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="brand" className="text-sm font-medium">
                Marque
              </label>
              <Select value={formState.brand} onValueChange={(value) => setFormState({ ...formState, brand: value })}>
                <SelectTrigger id="brand">
                  <SelectValue placeholder="Sélectionnez une marque" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="renault">Renault</SelectItem>
                  <SelectItem value="peugeot">Peugeot</SelectItem>
                  <SelectItem value="citroen">Citroën</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="volkswagen">Volkswagen</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Fourchette de prix: {formState.priceRange[0].toLocaleString()}€ -{" "}
              {formState.priceRange[1].toLocaleString()}€
            </label>
            <Slider
              defaultValue={[formState.priceRange[0], formState.priceRange[1]]}
              min={10000}
              max={150000}
              step={5000}
              onValueChange={(value) => setFormState({ ...formState, priceRange: value })}
              className="py-4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fuel" className="text-sm font-medium">
                Efficacité énergétique
              </label>
              <Select
                value={formState.fuelEfficiency}
                onValueChange={(value) => setFormState({ ...formState, fuelEfficiency: value })}
              >
                <SelectTrigger id="fuel">
                  <SelectValue placeholder="Sélectionnez une option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hybrid">Hybride</SelectItem>
                  <SelectItem value="plugin-hybrid">Hybride Rechargeable</SelectItem>
                  <SelectItem value="electric">Électrique</SelectItem>
                  <SelectItem value="efficient-gas">Essence Économique</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="eco" className="text-sm font-medium">
                Impact environnemental
              </label>
              <Select
                value={formState.ecoRating}
                onValueChange={(value) => setFormState({ ...formState, ecoRating: value })}
              >
                <SelectTrigger id="eco">
                  <SelectValue placeholder="Sélectionnez une option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">A - Très faible impact</SelectItem>
                  <SelectItem value="b">B - Faible impact</SelectItem>
                  <SelectItem value="c">C - Impact modéré</SelectItem>
                  <SelectItem value="d">D - Impact moyen</SelectItem>
                  <SelectItem value="e">E - Impact élevé</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Rechercher les SUVs écolos
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
