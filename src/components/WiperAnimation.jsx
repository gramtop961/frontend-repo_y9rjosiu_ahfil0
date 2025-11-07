import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind } from 'lucide-react';

const Dirt = ({ x, y, delay }) => (
  <motion.div
    className="absolute h-8 w-12 rounded-sm bg-gray-600/40 blur-[1px]"
    initial={{ opacity: 0, x, y }}
    animate={{ opacity: 1, x, y, transition: { delay } }}
  />
);

const Swipe = ({ start = -140, end = 140 }) => (
  <motion.div
    className="absolute inset-0"
    initial={{ x: start, rotate: -8 }}
    animate={{ x: [start, end], rotate: [ -8, 8 ], transition: { duration: 1.6, ease: 'easeInOut' } }}
  >
    {/* Wiper arm */}
    <div className="absolute left-1/2 top-16 h-2 w-80 -translate-x-1/2 rounded bg-gray-800 shadow-lg" />
    {/* Wiper blade clearing path */}
    <div className="absolute left-1/2 top-16 h-10 w-80 -translate-x-1/2 rounded bg-gradient-to-b from-gray-200 to-gray-400 opacity-90 mix-blend-overlay" />
  </motion.div>
);

const WiperAnimation = ({ open, onClose }) => {
  const [storm, setStorm] = useState(false);

  useEffect(() => {
    if (!open) setStorm(false);
  }, [open]);

  const triggerStorm = () => {
    setStorm(true);
    setTimeout(() => setStorm(false), 2500);
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
            <h3 className="text-2xl font-bold text-gray-900">Trending Portable Wiper</h3>
            <p className="mt-1 text-gray-500">Summon a mini storm and watch the wiper clean the screen.</p>

            <div className="relative mt-6 h-72 w-full overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-slate-100 to-slate-50">
              {/* Storm overlay */}
              <AnimatePresence>
                {storm && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-slate-600/40 to-slate-800/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>

              {/* Wind icon */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-slate-700 shadow">
                <Wind size={16} /> {storm ? 'Storm On' : 'Calm'}
              </div>

              {/* Dirt on inner screen */}
              <div className="absolute inset-0">
                <Dirt x={40} y={40} delay={0.1} />
                <Dirt x={140} y={60} delay={0.15} />
                <Dirt x={90} y={120} delay={0.2} />
                <Dirt x={180} y={160} delay={0.25} />
                <Dirt x={240} y={90} delay={0.3} />
                <Dirt x={280} y={130} delay={0.35} />
              </div>

              {/* Wiper motion */}
              <AnimatePresence>{storm && <Swipe />}</AnimatePresence>

              {/* Call to action */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <button
                  onClick={triggerStorm}
                  className="rounded-full bg-indigo-600 px-5 py-2 text-white shadow hover:bg-indigo-700"
                >
                  Start the Storm
                </button>
              </div>
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

export default WiperAnimation;
