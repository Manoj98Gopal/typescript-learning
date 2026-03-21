import Reminder from "../models/reminder"

interface ReminderListProps {
    items : Reminder[]
}

const ReminderList = ({items}:ReminderListProps) => {
  return (
    <div>
        <ul>
            {items?.map(item => <div key={item.id}>{item.title}</div>)}
        </ul>
    </div>
  )
}

export default ReminderList