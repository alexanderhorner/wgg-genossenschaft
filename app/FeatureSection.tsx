import { BuildingOffice2Icon, MegaphoneIcon, CurrencyEuroIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Operatives Geschäft',
    description:
      'Das operative Geschäft beschäftigt sich einerseits mit dem Design unseres Produkts, dem WGG Hausaufgaben Häfft!, sowie mit der Bestellung und Herstellung unserer Produkte.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Marketing-Abteilung',
    description:
      'In der Marketing-Abteilung wird, sowohl die Werbung für unsere Hausaufgabenhefte als auch für die Mitgliedschaft bei unserem Unternehmen, der WGGenossenschaft, geplant und durchgeführt.',
    icon: MegaphoneIcon,
  },
  {
    name: 'Buchhaltung',
    description:
      'Die Buchhaltung sucht und wirbt neue Werbepartner unseres Unternehmens, der WGGenossenschaft an. Ebenso kümmert sie sich um den Verkauf unserer Unternehmensanteile und die Buchführung.',
    icon: CurrencyEuroIcon,
  }
]

export default function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Lernen durch Handeln</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Praxisnah Lernen, Gemeinsam Wachsen
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Erlebe aktive Mitgestaltung und unternehmerisches Denken in unserer Schülergenossenschaft WGGenossenschaft eSG. Gemeinsam kreieren wir sinnvolle und nachhaltige Produkte.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
