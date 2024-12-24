import React from "react";
import { Gantt } from "gantt-task-react";
import { initTasks } from "./helper";
import "gantt-task-react/dist/index.css";

// Init
const App = () => {
  let columnWidth = 65

  return (
    <div className="Wrapper">
      <div>
        <Gantt
          tasks={initTasks()}
          columnWidth={columnWidth} />
      </div>
    </div>
  )
}

export default App;
