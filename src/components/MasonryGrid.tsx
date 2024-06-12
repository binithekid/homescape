import { motion } from "framer-motion";

const images = [
  "/chair1.jpg",
  "/slider1.jpg",
  "/support.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/istallation.jpg",
];

const MasonryGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
      className="columns-1 sm:columns-2 lg:columns-3 py-20 gap-4"
    >
      {images.map((src, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full object-cover rounded-lg"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default MasonryGrid;
