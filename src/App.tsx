import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { SignalLayer } from "./components/SignalLayer"
import { CompanyEcosystem } from "./components/CompanyEcosystem"
import { Services } from "./components/Services"
import { GroupArchitecture } from "./components/GroupArchitecture"
import { Brands } from "./components/Brands"
import { Industries } from "./components/Industries"
import { About } from "./components/About"
import { Works } from "./components/Works"
import { FAQ } from "./components/FAQ"
import { Contact } from "./components/Contact"
import { Insights } from "./components/Insights"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignalLayer />
        <CompanyEcosystem />
        <Services />
        <GroupArchitecture />
        <Brands />
        <Industries />
        <About />
        <Works />
        <FAQ />
        <Contact />
        <Insights />
      </main>
      <Footer />
    </>
  )
}
