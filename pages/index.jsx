import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../components/Button";

export default function Index() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex min-w-full flex-col gap-4 text-center lg:w-1/2 lg:min-w-0 lg:text-left">
          <div className="text-center text-6xl font-black tracking-wide text-transparent lg:text-right ">
            <h2 className="bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text">
              Johns Hopkins
            </h2>
            <h2 className="bg-gradient-to-r from-green-300 to-blue-light bg-clip-text">
              Science Olympiad Invitational
            </h2>
          </div>

          <h3 className="text-center text-xl font-semibold text-blue-dark text-opacity-75 lg:text-right">
            JHU Homewood Campus, February 11
          </h3>
          <div className="flex justify-center lg:justify-end">
            {/* TODO: link to google form */}
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
        </div>
        <div className="relative aspect-square w-full lg:w-1/2">
          <Image src="/jhsoi-logo.png" alt="JHSOI Logo" layout="fill" />
        </div>
      </div>
    </motion.div>
  );
}
