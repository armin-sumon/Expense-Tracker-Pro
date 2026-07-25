import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch, FaBell, FaBars, FaSignOutAlt, FaUser } from 'react-icons/fa'

export default function Navbar({ setSidebarOpen }) {
  const [search, setSearch] = useState('')
  const [notifications] = useState(3)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  const navigate = useNavigate()

  const storedUser = JSON.parse(localStorage.getItem('user')) || { name: 'User' }
  const userInitial = storedUser.name ? storedUser.name.charAt(0).toUpperCase() : 'U'

  // Logout Handler (Step 9)
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setDropdownOpen(false)
    navigate('/login')
  }

  return (
    <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-4 md:px-6 relative">
      <div className="flex items-center flex-1 max-w-md">
        <button 
          className="lg:hidden mr-3 text-gray-600 hover:text-gray-900"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars size={20} />
        </button>
        
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4 ml-4">
        {/* Notification Icon */}
        <button className="relative text-gray-600 hover:text-gray-900">
          <FaBell size={20} />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>
        
        {/* Profile Avatar & Dropdown Menu */}
        <div className="relative">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm focus:outline-none ring-2 ring-indigo-200"
          >
            {userInitial}
          </button>

          {/* User Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-800">{storedUser.name || 'User'}</p>
                <p className="text-xs text-gray-500 truncate">{storedUser.email || 'user@example.com'}</p>
              </div>

              <button
                onClick={() => { setDropdownOpen(false); navigate('/profile'); }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
              >
                <FaUser className="mr-2 text-gray-400" /> Profile
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center font-medium"
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}