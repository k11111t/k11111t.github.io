import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import jumpingCat from '../assets/jumping-gatito.gif'
import spinningCat from '../assets/cat-oiiaoiia-cat.gif'
import style from './ValentineComponent.module.css'

export default function ValentineComponent() {
  const [flipped, setFlipped] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-6">Will you be my Valentine? <br/>🥺<br/>👉👈</h1>
      {!showButtons && <motion.div
          className="flex flex-col items-center mt-6 text-4xl font-bold text-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{fontSize: "1.5rem"}}
        >
            🎉 Yeaahaay, woohooo, haaahaa, heeheee! 🎊
            <br/>
            <motion.img 
                src={jumpingCat}
                animate={{ scale: [1, 2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
            <motion.img 
                src={spinningCat}
                animate={{ scale: [1, 2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
        </motion.div>}
      {showButtons && <div className="flex space-x-4">
        <button className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition" onClick={() => setShowButtons(false)}>
          Yes ❤️
        </button>
        <motion.button
          className="px-6 py-3 bg-red-500 text-white font-bold text-lg rounded-lg shadow-lg relative"
          style={{
            transformStyle: "preserve-3d",
            position: "relative",
          }}
          onClick={() => {setFlipped(true); flipped && setShowButtons(false)}}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span
            style={{
                display: "inline-block",
                transform: flipped ? "rotateY(180deg)" : "none",
            }}>
            {flipped ? "Yes ❤️" : "No 💔"}
          </span>
        </motion.button>
      </div>}
    </div>
  );
}
