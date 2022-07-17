import { motion } from "framer-motion";
import Image from "next/image";
import ButtonLink from "../components/ButtonLink";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Section from "../components/Section";

// TODO: move all to one page, need graphics (like pic of jhu), rounded corners, dark blue bg with white text, add flex stats (maybe infographic)
export default function Index() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <NavBar />
      <div className="min-h-screen">
        <Section id="register">
          {/* title + logo container */}
          <div className="flex flex-col items-center lg:flex-row">
            {/* title + location + register container */}
            <div className="min-w-full text-center lg:w-1/2 lg:min-w-0 lg:text-left">
              {/* title container */}
              <div className="text-center text-6xl font-black tracking-wide text-transparent lg:text-left">
                <h2 className="bg-gradient-to-r from-green-300 to-blue-light bg-clip-text">
                  Science Olympiad Invitational at
                </h2>
                <h2 className="bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text pb-4">
                  Johns Hopkins University
                </h2>
              </div>
              {/* location */}
              <h3 className="pb-4 text-center text-xl font-semibold text-blue-dark text-opacity-75 lg:text-left">
                JHU Homewood Campus, February 11
              </h3>
              {/* registration button alignment container */}
              <div className="flex justify-center lg:justify-start">
                <ButtonLink text="Register" to="/" />
              </div>
            </div>
            {/* logo */}
            <div className="relative aspect-square w-full lg:w-1/2">
              <Image src="/jhsoi-logo.png" alt="JHSOI Logo" layout="fill" />
            </div>
          </div>
        </Section>
      </div>

      <div className="w-screen bg-blue-dark text-white">
        <Section id="info">
          <h2 className="pb-12 text-center text-5xl font-black tracking-wide lg:text-left">
            Tournament Information
          </h2>
          <article className="text-lg">
            The Science Olympiad Invitational at Johns Hopkins (JHSOI) is hosted
            by Maryland Science Olympiad at Johns Hopkins and the Charm City
            Science League (CCSL). JHSOI will be open to both in-state and
            out-of-state Division B teams. Baltimore teams associated with CCSL
            will compete in the Baltimore league, and all other teams will
            compete in the open league.
          </article>

          <ButtonLink text="Map" to="/" />
          <ButtonLink text="Schedule" to="/" />

          <h2 className="py-12 text-2xl font-bold">
            Event Specific Clarifications
          </h2>
          <h3 className="text-2xl">All Lab Events</h3>
          <ul className="ml-8 list-disc">
            <li>
              All participants must bring their own protective protective
              equipment. Failure to do so will result in a tier.
            </li>
            <li>
              Unfortunately, the university is unable to provide any protective
              equipment to competitors.
            </li>
          </ul>
          <h2 className="mt-8 mb-4 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-3xl font-black tracking-wide text-transparent">
            Contact Information
          </h2>
          <p className="text-lg">
            Please reach out to{" "}
            <a
              href="mailto: jhso.invitational@gmail.com"
              className="text-blue-dark underline hover:text-blue-light"
            >
              jhso.invitational@gmail.com
            </a>{" "}
            with any questions regarding the tournament.
          </p>
        </Section>
      </div>

      <Section id="board">
        <h2 className="pb-12 text-center text-5xl font-black tracking-wide text-blue-dark lg:text-left">
          JHSOI Board
        </h2>
        <div className="grid w-full gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card url="/adam.png" name="Adam Luo" title="Director" />
          <Card url="/daniel.jpg" name="Daniel Jin" title="Director" />
          <Card url="/ria.jpg" name="Ria Jha" title="Director" />
          <Card url="/margaret.png" name="Margaret Li" title="Director" />
          <Card url="/alex.jpg" name="Alex Luo" title="Web Developer" />
        </div>
      </Section>
    </motion.div>
  );
}
