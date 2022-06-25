import { motion } from "framer-motion";
import Card from "../components/Card";

// TODO: move board to home?
export default function Board() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
