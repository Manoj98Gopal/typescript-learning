import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import ReminderService from "./services/reminder";

function App() {
  const [reminder, setReminder] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const response = await ReminderService.getReminders();
    setReminder(response);
  };

  return (
    <div className="p-6">
      <ReminderList items={reminder} />
    </div>
  );
}

export default App;
