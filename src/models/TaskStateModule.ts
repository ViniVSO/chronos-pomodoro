import type { TaskModule } from "./TaskModule"

export type TaskStateModule = {
  task: TaskModule[];
  secondsRemaining: number;
  formatedSecondsRemaining: string;
  activeTask: TaskModule | null;
  currentCycle: number; // 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  }
}