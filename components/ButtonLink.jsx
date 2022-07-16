import { motion } from "framer-motion";

export default function ButtonLink({ text, to }) {
  return (
    <motion.a whileHover="hover" href={to} target="_blank">
      <button className="cursor-pointer rounded bg-blue-light py-4 px-6 font-medium text-white">
        <div className="flex items-center gap-2">
          <span>{text}</span>
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
      </button>
    </motion.a>
  );
}
