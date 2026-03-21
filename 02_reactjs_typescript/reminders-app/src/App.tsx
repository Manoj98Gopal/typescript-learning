import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";

const list: Reminder[] = [{ id: 1, title: "Reminder 1" }];

function App() {
  return (
    <div className="p-6">
      <ReminderList items={list} />
    </div>
  );
}

export default App;
