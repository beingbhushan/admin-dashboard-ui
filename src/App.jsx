import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import Charts from './components/Charts';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { title: "Total Revenue", value: "$32,450", change: "+12%", trend: "up" },
    { title: "Active Users", value: "1,425", change: "+18%", trend: "up" },
    { title: "Tasks Completed", value: "324", change: "-4%", trend: "down" },
    { title: "Avg. Session", value: "2m 45s", change: "+5%", trend: "up" }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-900' : 'bg-gray-50'}`}>
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1 overflow-x-hidden">
          <Navbar 
            darkMode={darkMode} 
            toggleDarkMode={() => setDarkMode(!darkMode)} 
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          />
          <main className="p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, i) => (
                <StatsCard key={i} {...stat} darkMode={darkMode} />
              ))}
            </div>
            
            {/* Charts Section */}
            <Charts darkMode={darkMode} />
          </main>
        </div>
      </div>
    </div>
  );
}