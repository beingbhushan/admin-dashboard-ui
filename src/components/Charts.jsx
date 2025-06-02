import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function Charts({ darkMode }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(139, 92, 246, 0.3)');
    gradient.addColorStop(1, 'rgba(139, 92, 246, 0.01)');

    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue',
        data: [12000, 19000, 15000, 20000, 25000, 22000],
        borderColor: '#8b5cf6',
        backgroundColor: gradient,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
      }]
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
        },
        ticks: {
          color: darkMode ? '#94a3b8' : '#64748b',
          font: { size: 12 },
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          color: darkMode ? '#94a3b8' : '#64748b',
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <div className={`rounded-xl p-6 border shadow-sm ${
      darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
    }`}>
      <h3 className={`text-lg font-semibold mb-6 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Revenue Overview
      </h3>
      <div className="h-80 relative">
        {chartData && (
          <Line 
            ref={chartRef}
            data={chartData}
            options={options}
          />
        )}
      </div>
    </div>
  );
}
