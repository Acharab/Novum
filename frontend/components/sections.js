import { useRouter } from "next/router"
import Hero from "./sections/hero"
import cta from "./sections/cta"
import faq from "./sections/faq"
import homeService from "./sections/homeServicesSection"
import sectie from "./sections/section"
import revieuw from "./sections/revieuw"
import workProcces from "./sections/workProcces"
import advantages from "./sections/advantages"
import team from "./sections/team"
import contact from "./sections/contact"

// Map Strapi sections to section components
const sectionComponents = {
  ComponentSectionsHero: Hero,
  ComponentSectionsFaq: faq,
  ComponentSectionsCta: cta,
  ComponentSectionsHomeService: homeService,
  ComponentSectionsSection: sectie,
  ComponentSectionsRevieuw: revieuw,
  ComponentSectionsWorkProcess: workProcces,
  ComponentSectionsAdvantages: advantages,
  ComponentSectionsTeams: team,
  ComponentSectionsContact: contact,
}

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__typename]

  if (!SectionComponent) {
    return null
  }

  // Display the section
  return <SectionComponent data={sectionData} />
}

const PreviewModeBanner = () => {
  const router = useRouter()
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </div>
  )
}

// Display the list of sections
const Sections = ({ sections, preview }) => {
  return (
    <div className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.__typename}${section.id}`}
        />
      ))}
    </div>
  )
}

export default Sections
