import { motion } from "framer-motion";
import Image from "next/image";

export default function Card({ url, name, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="rounded-lg bg-gradient-to-r from-blue-dark to-blue-light text-center"
    >
      <h2 className="mt-1 text-xl font-bold text-white">{name}</h2>
      <h2 className="mb-1 text-lg font-bold text-white">{title}</h2>
      <div className="relative aspect-square w-full">
        <Image
          className="rounded-b-lg"
          src={url}
          alt={`${name}, ${title}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </motion.div>
  );
}
