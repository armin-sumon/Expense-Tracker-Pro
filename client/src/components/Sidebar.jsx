import { NavLink, useNavigate } from 'react-router-dom'
import { FaHome, FaExchangeAlt, FaChartBar, FaUser, FaSignOutAlt, FaTimes } from 'react-icons/fa'

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate()

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
    { name: 'Transactions', path: '/transactions', icon: <FaExchangeAlt /> },
    { name: 'Analytics', path: '/analytics', icon: <FaChartBar /> },
    { name: 'Profile', path: '/profile', icon: <FaUser /> },
  ]

  // Step 9: Logout Handler
  const handleLogout = () => {
    // ১. ব্রাউজারের Storage থেকে টোকেন ও ইউজার ডাটা ডিলিট করা
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    // ২. সাইডবার বন্ধ করা (Mobile view-এর জন্য)
    if (setSidebarOpen) setSidebarOpen(false)

    // ৩. ইউজারকে Login পেজে পাঠানো
    navigate('/login')
  }

  return (
    <>
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-auto
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <span className="text-xl font-bold text-indigo-600">ExpensePro</span>
          <button 
            className="lg:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes size={20} />
          </button>
        </div>
        
        <nav className="mt-6 px-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => `
                flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${isActive 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-700 hover:bg-gray-100'}
              `}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <FaSignOutAlt className="mr-3 text-lg" />
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}