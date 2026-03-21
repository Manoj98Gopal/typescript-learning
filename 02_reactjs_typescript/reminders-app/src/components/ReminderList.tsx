import Reminder from "../models/reminder"

interface ReminderListProps {
    items : Reminder[],
    onRemoveReminder: (id:number) => void
}

const ReminderList = ({items,onRemoveReminder}:ReminderListProps) => {
  return (
    <div className="max-w-7xl m-auto">
        <ul className="border border-gray-300 rounded-lg overflow-hidden">
            {items?.map(item => {
              return  (
              <div 
              key={item.id}
              className="py-2 px-4 border border-gray-200 flex gap-2 items-center">
              <li>{item.title}</li>
              <button 
                onClick={() => {onRemoveReminder(item.id)}}
              className="px-4 py-2 border cursor-pointer border-red-300 hover:border-red-500 rounded-xl">delete</button>
            </div>)
            })}
        </ul>
    </div>
  )
}

export default ReminderList