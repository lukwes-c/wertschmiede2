import { Button } from "./components/ui/button.jsx";
import { Card, CardContent } from "./components/ui/card";
import { Check, Home, Mail, Lightbulb } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          WertSchmiede – Mehr aus Ihrer Immobilie machen
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Wir helfen Eigentümer*innen, das Potenzial ihrer Immobilie zu erkennen
          und gemeinsam wertschöpfend zu entwickeln – partnerschaftlich,
          transparent und fair.
        </p>
        <Button className="text-lg px-6 py-4">
          Jetzt kostenloses Erstgespräch anfragen
        </Button>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6 text-center">
            <Home className="mx-auto mb-4 h-10 w-10 text-gray-700" />
            <h3 className="text-xl font-semibold mb-2">Potenzial erkennen</h3>
            <p className="text-gray-600 text-sm">
              Wir analysieren Bestand, Grundstück und Lage – und finden heraus,
              was wirklich möglich ist.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Lightbulb className="mx-auto mb-4 h-10 w-10 text-gray-700" />
            <h3 className="text-xl font-semibold mb-2">Strategie entwickeln</h3>
            <p className="text-gray-600 text-sm">
              Ob Umbau, Bauvoranfrage oder Teilung: Wir entwerfen Ihren
              individuellen WertPlan.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Check className="mx-auto mb-4 h-10 w-10 text-gray-700" />
            <h3 className="text-xl font-semibold mb-2">Umsetzen oder verkaufen</h3>
            <p className="text-gray-600 text-sm">
              Gemeinsam realisieren wir die beste Lösung – mit Beteiligung nur
              bei echtem Mehrwert.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Bereit, Ihre Immobilie neu zu denken?
        </h2>
        <p className="text-gray-600 mb-6">
          Wir sind Ihr Entwicklungspartner – ehrlich, modern, individuell.
        </p>
        <Button className="px-6 py-3 text-lg">Kontakt aufnehmen</Button>
      </div>

      <div className="mt-12 text-center text-sm text-gray-400">
        © 2025 WertSchmiede – Wesinger & Ohmstedt
      </div>
    </div>
  );
}
