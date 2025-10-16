// export default function GitHubGraph() {
//   const weeks = 52;
//   const daysPerWeek = 7;

//   const generateActivity = () => {
//     const activity: number[][] = [];
//     for (let week = 0; week < weeks; week++) {
//       const weekData: number[] = [];
//       for (let day = 0; day < daysPerWeek; day++) {
//         weekData.push(Math.floor(Math.random() * 5));
//       }
//       activity.push(weekData);
//     }
//     return activity;
//   };

//   const activity = generateActivity();

//   const getColor = (level: number) => {
//     const colors = [
//       'bg-white/5',
//       'bg-white/20',
//       'bg-white/40',
//       'bg-white/60',
//       'bg-white/80',
//     ];
//     return colors[level];
//   };

//   return (
//     <section className="py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-white mb-8">GitHub Activity</h2>
//         <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 overflow-x-auto">
//           <div className="flex gap-1">
//             {activity.map((week, weekIndex) => (
//               <div key={weekIndex} className="flex flex-col gap-1">
//                 {week.map((day, dayIndex) => (
//                   <div
//                     key={`${weekIndex}-${dayIndex}`}
//                     className={`w-3 h-3 rounded-sm ${getColor(day)} transition-all hover:scale-110`}
//                     title={`Activity level: ${day}`}
//                   />
//                 ))}
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
//             <span>Less</span>
//             <div className="flex gap-1">
//               {[0, 1, 2, 3, 4].map((level) => (
//                 <div key={level} className={`w-3 h-3 rounded-sm ${getColor(level)}`} />
//               ))}
//             </div>
//             <span>More</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";

export default function GitHubGraph() {
  return (
    <section
      id="github-graph"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-transparent"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight"
        >
          GitHub Activity
        </motion.h2>

        {/* Graph Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-white/10 transition-shadow duration-500"
        >
          <div className="flex justify-center overflow-x-auto">
            <motion.img
              src="https://ghchart.rshah.org/a3a3a3/keshav-const"
              alt="GitHub Contribution Graph"
              className="w-full max-w-4xl rounded-lg hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-sm md:text-base text-gray-400 leading-relaxed"
          >
            View more on{" "}
            <a
              href="https://github.com/keshav-const"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline decoration-dotted"
            >
              GitHub
            </a>
            .
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle depth blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-white/5 blur-3xl rounded-full top-20 left-1/3 opacity-10" />
      </div>
    </section>
  );
}
