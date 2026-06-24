import type { ITask } from '../../types/index';
import { formatDate } from '../../utils/helpers';
import { getCategoryColor } from '../../utils/helpers';

interface TrashCardProps {
  task: ITask;
  onRestore: (id: string) => void;
  onPermanentDelete: (id: string) => void;
}

const TrashCard = ({ task, onRestore, onPermanentDelete }: TrashCardProps) => {
  return (
    <div className="border-b border-gray-200 px-10 py-6 opacity-75">
      {/* Top row - category + actions */}
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${getCategoryColor(task.category)}`}>
          {task.category}
        </span>
        <div className="flex gap-2">
          {/* Restore Button */}
          <button
            onClick={() => onRestore(task._id)}
            className="flex items-center gap-2 px-4 py-2 rounded font-medium text-sm bg-green-500 hover:bg-green-600 text-white transition-colors"
          >
            ↩ Restore
          </button>
          {/* Permanent Delete Button */}
          <button
            onClick={() => onPermanentDelete(task._id)}
            className="flex items-center gap-2 px-4 py-2 rounded font-medium text-sm bg-red-500 hover:bg-red-600 text-white transition-colors"
          >
            🗑 Delete Forever
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-500 mb-2 line-through">
        {task.title}
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{task.description}</p>

      {/* Deleted At */}
      {task.deletedAt && (
        <p className="text-gray-400 text-xs mt-2">
          Deleted on: {formatDate(task.deletedAt)}
        </p>
      )}
    </div>
  );
};

export default TrashCard;