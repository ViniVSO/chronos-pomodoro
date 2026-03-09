import { createContext } from "react";
import type { TaskStateModule } from "../../models/TaskStateModule";
import { initialTaskState } from "./intialTaskState";

type TaskContextProps = {
  state: TaskStateModule,
  setState: React.Dispatch<React.SetStateAction<TaskStateModule>>,
}

const initialContextValue = {
  state: initialTaskState,
  setState: () => { },
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

