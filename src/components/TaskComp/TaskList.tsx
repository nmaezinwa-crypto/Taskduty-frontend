import type { ITask } from '../../types/index';
import TaskCard from './TaskCard';

interface TaskListProps {
  tasks: ITask[];
  onEdit: (task: ITask) => void;
  onDelete: (id: string) => void;
}

const TaskList = ({ tasks, onEdit, onDelete }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-gray-400 text-lg">No tasks yet.</p>
        <p className="text-gray-400 text-sm mt-1">Click "+ Add New Task" to get started.</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;