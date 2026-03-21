import Reminder from "../models/reminder"

interface ReminderListProps {
    items : Reminder[]
}

const ReminderList = ({items}:ReminderListProps) => {
  return (
    <div>
        <ul className="border border-gray-300 rounded-2xl overflow-hidden">
            {items?.map(item => <li key={item.id}
            className="p-2 border border-gray-200"
            >{item.title}</li>)}
        </ul>
    </div>
  )
}

export default ReminderList