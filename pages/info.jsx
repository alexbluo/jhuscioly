import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Info() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-8"
    >
      <div className="flex flex-col">
        <div className="mb-8 text-6xl font-black tracking-wide text-transparent">
          <h2 className="mt-8 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-center">
            JHSOI Tournament Information
          </h2>
          <h3 className="mt-16 text-xl font-semibold text-blue-dark text-opacity-75">
            The Johns Hopkins Science Olympiad Invitational (JHSOI), hosted by
            Maryland Science Olympiad at Johns Hopkins and the Charm City
            Science League, will occur on February 11th at the Johns Hopkins
            University Homewood Campus.
          </h3>
        </div>
        <h2 className="mt-8 mb-4 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-3xl font-black tracking-wide text-transparent">
          Tournament Registration
        </h2>
        <p className="mb-4 text-lg">
          Teams can register for the tournament{" "}
          <a className="text-blue-dark underline hover:text-blue-light">here</a>
          .
        </p>
        <div className="flex">
          <motion.a whileHover="hover" href="/" target="_blank">
            <Button>
              <div className="flex items-center gap-2">
                <span>Register</span>
                <motion.svg
                  className="fill-white"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  variants={{
                    hover: {
                      scale: 1.2,
                    },
                  }}
                >
                  <path d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z" />
                  <path d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z" />
                </motion.svg>
              </div>
            </Button>
          </motion.a>
        </div>
        <h2 className="mt-8 mb-4 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-3xl font-black tracking-wide text-transparent">
          Tournament Schedule
        </h2>
        <p className="text-lg">
          The tournament schedule can be found{" "}
          <a className="text-blue-dark underline hover:text-blue-light">here</a>
          .
        </p>
        <h2 className="mt-8 mb-4 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-3xl font-black tracking-wide text-transparent">
          Tournament Map
        </h2>
        <p className="text-lg">
          The tournament map can be found{" "}
          <a className="text-blue-dark underline hover:text-blue-light">here</a>
          .
        </p>
        <h2 className="mt-8 mb-4 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-3xl font-black tracking-wide text-transparent">
          Event Specific Clarifications
        </h2>
        <h3 className="text-2xl">All Lab Events</h3>
        <ul className="ml-8 list-disc">
          <li>
            All participants must bring their own protective protective
            equipment. Failure to do so will result in a tier.
          </li>
          <li>
            The university cannot provide any protective equipment for
            competitors.
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
      </div>
    </motion.div>
  );
}
