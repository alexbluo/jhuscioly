import { motion } from "framer-motion";

export default function Updates() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>updates</div>
    </motion.div>
  );
}
