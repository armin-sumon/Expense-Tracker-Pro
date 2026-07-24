export default function Card({ title, amount, icon, bgColor, textColor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        <div className={`p-2 rounded-lg ${bgColor}`}>
          <span className={textColor}>{icon}</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{amount}</h3>
    </div>
  )
}