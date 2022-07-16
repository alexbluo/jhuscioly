import { motion } from "framer-motion";
import Card from "../components/Card";

export default function Board() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-16 text-center text-6xl font-black tracking-wide text-transparent">
        <h2 className="mt-8 bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text">
          JHSOI Board
        </h2>
      </div>
      <div className="grid w-full gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card url="/adam.png" name="Adam Luo" title="Director" />
        <Card url="/daniel.jpg" name="Daniel Jin" title="Director" />
        <Card url="/ria.jpg" name="Ria Jha" title="Director" />
        <Card url="/margaret.png" name="Margaret Li" title="Director" />
        <Card url="/alex.jpg" name="Alex Luo" title="Web Developer" />
      </div>
    </motion.div>
  );
}
