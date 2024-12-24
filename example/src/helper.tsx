import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const tasks: Task[] = [
    // scroll (0, 0) 일 때
    {
      start: new Date(2020, 0, 1),
      end: new Date(2020, 1, 1),
      name: "시작일만 보임",
      id: "ProjectSample",
      progress: 25,
      type: "project",
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: new Date(2020, 0, 1),
      end: new Date(2020, 0, 15),
      name: "시작일, 종료일 보임",
      id: "Task 0",
      progress: 45,
      type: "task",
      project: "ProjectSample",
      displayOrder: 2,
    },
    {
      start: new Date(2020, 2, 1),
      end: new Date(2020, 3, 1),
      name: "시작일, 종료일 안보임",
      id: "Task 1",
      progress: 25,
      type: "task",
      project: "ProjectSample",
      displayOrder: 3,
    },
    // scroll (x, 0) 일 때
    {
      start: new Date(2020, 0, 25),
      end: new Date(2020, 1, 15),
      name: "종료일만 보임",
      id: "Task 2",
      progress: 10,
      type: "task",
      project: "ProjectSample",
      displayOrder: 4,
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
