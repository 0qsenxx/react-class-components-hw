import { TaskList } from "./components/TaskList/TaskList";
import { nanoid } from "nanoid";
const tasksArr = [
  {
    text: "do homework",
    id: nanoid(),
  },
  {
    text: "make dinner",
    id: nanoid(),
  },
  {
    text: "clean my room",
    id: nanoid(),
  },
];

function App() {
  return (
    <>
      <TaskList tasks={tasksArr}></TaskList>
    </>
  );
}

export { tasksArr };
export default App;
