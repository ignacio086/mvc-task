import axios from "axios";
import { Task } from "../../schema/taskSchema";
import TaskEditClient from "./page.client";

export const dynamic = "force-dynamic";
async function getData(id: number) {
  const res = await axios
    .get(`http://localhost:3000/api/task/${id}`)
    .then((res) => res.data);
  return res;
}

export default async function taskEdit({ params }) {
  let task: Task[] = await getData(params.id);

  return (
    <div>
      <TaskEditClient task={task[0]} />
    </div>
  );
}
