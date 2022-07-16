import { motion } from "framer-motion";
import Image from "next/image";
import ButtonLink from "../components/ButtonLink";

// TODO: move all to one page, need graphics (like pic of jhu), rounded corners, dark blue bg with white text, add flex stats (maybe infographic)
export default function Index() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* title + logo container */}
      <div className="flex flex-col items-center lg:flex-row">
        {/* title + location + register container */}
        <div className="flex min-w-full flex-col gap-4 text-center lg:w-1/2 lg:min-w-0 lg:text-left">
          {/* title container */}
          <div className="text-center text-6xl font-black tracking-wide text-transparent lg:text-left">
            <h2 className="bg-gradient-to-r from-green-300 to-blue-light bg-clip-text">
              Science Olympiad Invitational at
            </h2>
            <h2 className="bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text">
              Johns Hopkins University
            </h2>
          </div>
          {/* location */}
          <h3 className="text-center text-xl font-semibold text-blue-dark text-opacity-75 lg:text-left">
            JHU Homewood Campus, February 11
          </h3>
          {/* registration button alignment container */}
          <div className="flex justify-center lg:justify-start">
            {/* TODO: link to google form */}
            <ButtonLink text="Register" to="/" />
          </div>
        </div>
        {/* logo */}
        <div className="relative aspect-square w-full lg:w-1/2">
          <Image src="/jhsoi-logo.png" alt="JHSOI Logo" layout="fill" />
        </div>
      </div>
      {/* end title + logo container */}
    </motion.div>
  );
}
