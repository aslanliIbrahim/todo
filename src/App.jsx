import { useState } from "react";
import FloatingButton from "./components/FloatingButton";
import InputModal from "./components/InputModal";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const addTask = (text) => {
    setTasks([{ id: Date.now(), text, complated: false }, ...tasks]);
  };
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <main className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-4 text-primary">
          TODO LIST
        </h1>
        <SearchBar value={search} onChange={setSearch} />
        <TaskList tasks={filteredTasks} />
      </div>
      <FloatingButton onClick={() => setShowModal(true)} />
      {showModal && (
        <InputModal
          onClose={() => setShowModal(false)}
          onAdd={addTask}
        />
      )}
    </main>
  );
}

export default App;
