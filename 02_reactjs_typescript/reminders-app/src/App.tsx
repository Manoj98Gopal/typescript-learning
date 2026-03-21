import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import ReminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminder, setReminder] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const response = await ReminderService.getReminders();
    setReminder(response);
  };

  const removeReminder = (id:number) => {
    const filteredData = reminder?.filter(item => item.id != id)
    setReminder(filteredData)
  };

  const addReminder = async(title:string) => {
    const response = await ReminderService.addReminder(title)
    setReminder((props) => [response,...props])
  }

  return (
    <div className="p-6 max-w-7xl m-auto">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminder} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
