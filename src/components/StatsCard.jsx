export default function StatsCard({ title, value, change, trend, darkMode }) {
  return (
    <div className={`backdrop-blur-sm rounded-xl p-6 border ${
      darkMode 
        ? 'bg-slate-800/50 border-slate-700' 
        : 'bg-white/80 border-gray-200'
    } shadow-sm hover:shadow-md transition-all`}>
      <p className={`text-sm font-medium ${
        darkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>{title}</p>
      <div className="mt-2 flex justify-between items-end">
        <h3 className={`text-2xl font-semibold ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>{value}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          trend === 'up'
            ? darkMode 
              ? 'bg-green-900/30 text-green-400' 
              : 'bg-green-100 text-green-800'
            : darkMode 
              ? 'bg-red-900/30 text-red-400' 
              : 'bg-red-100 text-red-800'
        }`}>
          {change}
        </span>
      </div>
    </div>
  );
}