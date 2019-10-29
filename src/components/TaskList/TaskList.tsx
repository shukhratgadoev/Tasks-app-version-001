import * as React from "react";

import { TaskType } from "../../interfaces/types";

import TaskListItem from "../TaskListItem";
import { List, Card } from "antd";

interface Props {
  tasks: TaskType[];
  onDelete: (task: TaskType) => void;
}

export const TasksList: React.FunctionComponent<Props> = ({
  tasks,
  onDelete
}) => (
  <List grid={{ gutter: 16, column: 4 }}>
    {tasks.map((task, i) => (
      <List.Item key={i}>
        <Card title={`Task: ${task.id}`}>
          <TaskListItem task={task} onDelete={onDelete} />
        </Card>
      </List.Item>
    ))}
  </List>
);
