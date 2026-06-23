import type { ITask } from '../../types/index';
import ActionButton from './ActionButton';
import { getCategoryColor } from '../../utils/helpers';

interface TaskCardProps {
  task: ITask;
  onEdit: (task: ITask) => void;
  onDelete: (id: string) => void;
}

const TaskCard = ({ task, onEdit, onDelete }: TaskCardProps) => {
  return (
    <div className="border-b border-gray-200 px-10 py-6">
      {/* Top row - category + actions */}
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${getCategoryColor(task.category)}`}>
          {task.category}
        </span>
        <div className="flex gap-2">
          <ActionButton
            label="Edit"
            variant="edit"
            onClick={() => onEdit(task)}
          />
          <ActionButton
            label="Delete"
            variant="delete"
            onClick={() => onDelete(task._id)}
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">{task.title}</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">{task.description}</p>

      {/* Due Date */}
      <p className="text-gray-400 text-xs mt-2">
        Due: {new Date(task.dueDate).toLocaleDateString('en-US', {
          year: 'numeric', month: 'short', day: 'numeric'
        })}
      </p>
    </div>
  );
};

export default TaskCard;