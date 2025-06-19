import { useEffect, useState } from "react";
import FloatingButton from "./components/FloatingButton";
import InputModal from "./components/InputModal";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const todosRaw = localStorage.getItem("todos");
      const parsed = todosRaw ? JSON.parse(todosRaw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("localStorage parsing error:", err);
      return [];
    }
  });
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([{ id: Date.now(), text, completed: false }, ...tasks]);
  };
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLocaleLowerCase())
  );
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-4 text-primary">
          TODO LIST
        </h1>
        <SearchBar value={search} onChange={setSearch} />
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTaskCompletion}
        />
      </div>
      <FloatingButton onClick={() => setShowModal(true)} />
      {showModal && (
        <InputModal onClose={() => setShowModal(false)} onAdd={addTask} />
      )}
    </main>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import FloatingButton from "./components/FloatingButton";
// import InputModal from "./components/InputModal";
// import SearchBar from "./components/SearchBar";
// import TaskList from "./components/TaskList";

// function App() {
//   const [tasks, setTasks] = useState(() => {
//     try {
//       const todosRaw = localStorage.getItem("todos");
//       const parsed = todosRaw ? JSON.parse(todosRaw) : [];
//       return Array.isArray(parsed) ? parsed : [];
//     } catch (err) {
//       console.error("localStorage parsing error:", err);
//       return [];
//     }
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (text) => {
//     setTasks([{ id: Date.now(), text, completed: false }, ...tasks]);
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const toggleTaskCompletion = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const filteredTasks = tasks.filter((task) =>
//     task.text.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <main className="min-h-screen bg-white p-6 flex flex-col items-center">
//       <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
//         <h1 className="text-2xl font-bold text-center mb-4 text-primary">
//           TODO LIST
//         </h1>
//         <SearchBar value={search} onChange={setSearch} />
//         <TaskList
//           tasks={filteredTasks}
//           onDelete={deleteTask}
//           onToggle={toggleTaskCompletion}
//         />
//       </div>
//       <FloatingButton onClick={() => setShowModal(true)} />
//       {showModal && (
//         <InputModal onClose={() => setShowModal(false)} onAdd={addTask} />
//       )}
//     </main>
//   );
// }

// export default App;
