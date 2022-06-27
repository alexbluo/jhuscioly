import { motion } from "framer-motion";

export default function Info() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* consider break word or resize layout padding for mobile... */}
      <div className="flex flex-col items-center text-center lg:text-left">
        <h2 className="bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-center text-6xl font-black tracking-wide text-transparent">
          JHSOI Tournament Information
        </h2>
      </div>
      <h3 className="mt-16 text-xl font-semibold text-blue-dark text-opacity-75">
        The Johns Hopkins Science Olympiad Invitational (JHSOI), hosted by
        Maryland Science Olympiad at Johns Hopkins and the Charm City Science
        League, will occur on February 11th at the Johns Hopkins University
        Homewood Campus.
      </h3>

      <h2 className="mt-8 mb-4 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-3xl font-black tracking-wide text-transparent">
        Tournament Registration
      </h2>
      <p className="mb-4 text-lg">
        Teams can register for the tournament{" "}
        <a className="text-blue-dark underline hover:text-blue-light">here</a>.
      </p>
      <h2 className="mt-8 mb-4 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-3xl font-black tracking-wide text-transparent">
        Tournament Schedule
      </h2>
      <p className="text-lg">
        The tournament schedule can be found{" "}
        <a className="text-blue-dark underline hover:text-blue-light">here</a>.
      </p>
      <h2 className="mt-8 mb-4 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-3xl font-black tracking-wide text-transparent">
        Tournament Map
      </h2>
      <p className="text-lg">
        The tournament map can be found{" "}
        <a className="text-blue-dark underline hover:text-blue-light">here</a>.
      </p>
      <h2 className="mt-8 mb-4 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-3xl font-black tracking-wide text-transparent">
        Event Specific Clarifications
      </h2>
      <h3 className="text-2xl">All Lab Events</h3>
      <ul className="ml-8 list-disc">
        <li>
          All participants must bring their own protective protective equipment.
          Failure to do so will result in a tier.
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
    </motion.div>
  );
}
