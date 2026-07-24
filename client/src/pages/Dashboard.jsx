import { FaArrowUp, FaArrowDown, FaPiggyBank } from 'react-icons/fa'
import Card from '../components/Card'

export default function Dashboard() {
  const stats = {
    balance: '$12,500',
    income: '$20,000',
    expense: '$7,500',
    savings: '$12,500',
  }

  const transactions = [
    { id: 1, title: 'Grocery Shopping', category: 'Food', amount: -120, date: '2025-03-28', status: 'Completed' },
    { id: 2, title: 'Salary March', category: 'Salary', amount: 5000, date: '2025-03-25', status: 'Completed' },
    { id: 3, title: 'Electricity Bill', category: 'Bills', amount: -85, date: '2025-03-22', status: 'Completed' },
    { id: 4, title: 'Freelance Project', category: 'Freelancing', amount: 1500, date: '2025-03-20', status: 'Completed' },
    { id: 5, title: 'Restaurant Dinner', category: 'Food', amount: -60, date: '2025-03-18', status: 'Completed' },
    { id: 6, title: 'Gas Station', category: 'Transport', amount: -45, date: '2025-03-15', status: 'Pending' },
    { id: 7, title: 'Online Course', category: 'Education', amount: -200, date: '2025-03-12', status: 'Completed' },
    { id: 8, title: 'Birthday Gift', category: 'Gift', amount: -50, date: '2025-03-10', status: 'Completed' },
    { id: 9, title: 'Side Hustle', category: 'Business', amount: 800, date: '2025-03-08', status: 'Completed' },
    { id: 10, title: 'Mobile Recharge', category: 'Bills', amount: -15, date: '2025-03-05', status: 'Completed' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Balance" amount={stats.balance} icon={<FaPiggyBank />} bgColor="bg-blue-100" textColor="text-blue-600" />
        <Card title="Total Income" amount={stats.income} icon={<FaArrowUp />} bgColor="bg-green-100" textColor="text-green-600" />
        <Card title="Total Expense" amount={stats.expense} icon={<FaArrowDown />} bgColor="bg-red-100" textColor="text-red-600" />
        <Card title="Savings" amount={stats.savings} icon={<FaPiggyBank />} bgColor="bg-purple-100" textColor="text-purple-600" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Overview</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            Chart - Expense vs Income
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Expense by Category</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            Pie Chart
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{txn.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{txn.category}</td>
                  <td className={`px-4 py-3 text-sm font-semibold ${txn.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {txn.amount < 0 ? `-$${Math.abs(txn.amount)}` : `+$${txn.amount}`}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{txn.date}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      txn.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}