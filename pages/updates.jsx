import { motion } from "framer-motion";
import Update from "../components/Update";

export default function Updates() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col">
        <div className="mb-8 text-center text-6xl font-black tracking-wide text-transparent">
          <h2 className="mt-8 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text">
            Updates
          </h2>
          <h3 className="mt-8 text-center text-xl font-semibold text-blue-dark text-opacity-75">
            Updates regarding the 2023 Johns Hopkins Science Olympiad
            Invitational will be posted below.
          </h3>
        </div>
        <Update title="JHSOI Moving to In-Person for 2023" date="6/25/2022">
          The 2023 Johns Hopkins Science Olympiad Invitation will be an
          in-person event. The tournament will be held on February 11th at the
          Johns Hopkins University Homewood campus. Email{" "}
          <a
            href="mailto: jhso.invitational@gmail.com"
            className="text-blue-dark underline hover:text-blue-light"
          >
            jhso.invitational@gmail.com
          </a>{" "}
          with any questions.
        </Update>
      </div>
    </motion.div>
  );
}
