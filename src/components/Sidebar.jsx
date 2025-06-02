import { FiHome, FiPieChart, FiUsers, FiSettings, FiLayers } from 'react-icons/fi';

const Sidebar = () => {
  const navItems = [
    { icon: <FiHome size={20} />, name: 'Dashboard' },
    { icon: <FiPieChart size={20} />, name: 'Analytics' },
    { icon: <FiLayers size={20} />, name: 'Projects' },
    { icon: <FiUsers size={20} />, name: 'Team' },
    { icon: <FiSettings size={20} />, name: 'Settings' }
  ];

  return (
    <aside className="w-64 bg-white shadow-lg hidden md:block">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
      </div>
      <nav className="mt-6 px-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-4 py-3 rounded-lg mb-2 transition-all ${index === 0 ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <span className="mr-3">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;