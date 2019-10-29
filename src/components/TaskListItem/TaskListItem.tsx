import React, { FunctionComponent } from "react";
import { Button } from "antd";

import { TaskType } from "../../interfaces/types";

interface Props {
  task: TaskType;
  onDelete: (task: TaskType) => void;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <li>
      <p>{task.name} </p>
      <Button onClick={onClick} type="danger">
        Delete
      </Button>
    </li>
  );
};
