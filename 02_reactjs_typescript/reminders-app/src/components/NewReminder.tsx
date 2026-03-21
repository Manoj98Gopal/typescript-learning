import { useState } from "react";

interface NewReminderPro {
  onAddReminder: (title: string) => void;
}

const NewReminder = ({ onAddReminder }: NewReminderPro) => {
  const [title, setTitle] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("")
  };

  return (
    <form
      className="my-4 border border-gray-600 p-6 flex gap-4 items-center rounded-lg"
      onSubmit={submit}
    >
      <div>
        <label htmlFor="title" />
        <input
          type="text"
          value={title}
          id="title"
          className="border border-gray-400 px-2 py-1 rounded-sm"
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer px-4 py-2 rounded-lg text-white"
        type="submit"
      >
        Add Reminder
      </button>
    </form>
  );
};

export default NewReminder;
