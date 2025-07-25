import { createContext, type SetStateAction } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<SetStateAction<TaskStateModel>>;
};

const initialContextValue = { state: initialTaskState, setState: () => {} };

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
