import axios from "axios";
import { Task } from "../schema/taskSchema";


async function getData() {
  const res = await axios.get("http://localhost:3000/api/task");
  return res.data
}
export default async function Home() {
  let nombre:Task[] = await getData();

  return (
    <main className="flex min-h-screen flex-col gap-8 items-center justify-between p-24">
      {
        nombre.map((task:Task) => (
          <div className={`w-1/2 flex flex-col justify-around rounded-xl h-96 p-8 bg-slate-800 text-white `} key={task.id}>
            <div className="flex justify-between">
              <h1 className={`${task.done?'line-through':''} text-5xl`}>{task.title}</h1>
              <a href="/2" className={`border-2 border-slate-600 hover:bg-slate-600 w-auto h-12 p-2 rounded-xl text-xs`}>Editar</a>
            </div>
            <p className={`${task.done?'line-through':''}`}>{task.description}</p>
          </div>
        ))
      }
    </main>
  );
}
