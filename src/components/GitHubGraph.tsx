export default function GitHubGraph() {
  const weeks = 52;
  const daysPerWeek = 7;

  const generateActivity = () => {
    const activity: number[][] = [];
    for (let week = 0; week < weeks; week++) {
      const weekData: number[] = [];
      for (let day = 0; day < daysPerWeek; day++) {
        weekData.push(Math.floor(Math.random() * 5));
      }
      activity.push(weekData);
    }
    return activity;
  };

  const activity = generateActivity();

  const getColor = (level: number) => {
    const colors = [
      'bg-white/5',
      'bg-white/20',
      'bg-white/40',
      'bg-white/60',
      'bg-white/80',
    ];
    return colors[level];
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">GitHub Activity</h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 overflow-x-auto">
          <div className="flex gap-1">
            {activity.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm ${getColor(day)} transition-all hover:scale-110`}
                    title={`Activity level: ${day}`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div key={level} className={`w-3 h-3 rounded-sm ${getColor(level)}`} />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
