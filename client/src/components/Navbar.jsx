import { useState } from 'react'
import { FaSearch, FaBell, FaBars } from 'react-icons/fa'

export default function Navbar({ setSidebarOpen }) {
  const [search, setSearch] = useState('')
  const [notifications] = useState(3)

  return (
    <header className="bg-white shadow-sm border-b h-16 flex items-center px-4 md:px-6">
      <button 
        className="lg:hidden mr-3 text-gray-600 hover:text-gray-900"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars size={20} />
      </button>
      
      <div className="relative flex-1 max-w-md">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
        />
      </div>
      
      <div className="flex items-center space-x-4 ml-4">
        <button className="relative text-gray-600 hover:text-gray-900">
          <FaBell size={20} />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>
        
        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
          JD
        </div>
      </div>
    </header>
  )
}