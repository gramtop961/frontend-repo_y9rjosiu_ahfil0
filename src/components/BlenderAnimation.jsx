import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const Fruit = ({ delay, x }) => (
  <motion.div
    initial={{ y: -200, opacity: 0, x }}
    animate={{ y: 0, opacity: 1, transition: { delay, type: 'spring', stiffness: 200 } }}
    exit={{ y: 200, opacity: 0 }}
    className="h-6 w-6 rounded-full"
    style={{ background: 'linear-gradient(135deg,#f97316,#f59e0b)' }}
  />
);

const BlenderAnimation = ({ open, onClose }) => {
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!open) {
      setIsRunning(false);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [open]);

  const startBlend = () => {
    setIsRunning(true);
    timerRef.current = setTimeout(() => {
      setIsRunning(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-900">Portable Blender</h3>
            <p className="mt-1 text-gray-500">Turn it on and watch fruits drop to make a fresh juice.</p>

            <div className="relative mt-6 h-72 w-full overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-sky-50 to-white">
              {/* Blender glass */}
              <div className="absolute bottom-6 left-1/2 h-40 w-48 -translate-x-1/2 rounded-b-2xl border-4 border-gray-300 bg-white/60 backdrop-blur" />
              {/* Blender base */}
              <div className="absolute bottom-0 left-1/2 h-16 w-56 -translate-x-1/2 rounded-2xl bg-gray-900 shadow-xl" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-gray-700 p-3 shadow">
                <button
                  onClick={startBlend}
                  className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-white shadow hover:bg-emerald-600"
                >
                  <Play size={16} /> Turn on Portable Blender
                </button>
              </div>

              {/* Fruits falling */}
              <AnimatePresence>
                {isRunning && (
                  <>
                    <Fruit delay={0.0} x={-60} />
                    <Fruit delay={0.1} x={-20} />
                    <Fruit delay={0.15} x={20} />
                    <Fruit delay={0.22} x={60} />
                  </>
                )}
              </AnimatePresence>

              {/* Juice fill */}
              <motion.div
                className="absolute bottom-6 left-1/2 h-0 w-48 -translate-x-1/2 rounded-b-xl"
                initial={{ height: 0, background: 'linear-gradient(180deg,#fde047,#f59e0b)' }}
                animate={isRunning ? { height: 120 } : { height: 0 }}
                transition={{ duration: 1.2 }}
                style={{ filter: 'saturate(1.2)' }}
              />
            </div>

            <div className="mt-6 flex justify-end">
              <button onClick={onClose} className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlenderAnimation;
