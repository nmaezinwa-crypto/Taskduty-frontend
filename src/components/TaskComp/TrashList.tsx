import type { ITask } from '../../types/index';
import TrashCard from './TrashCard';

interface TrashListProps {
  tasks: ITask[];
  onRestore: (id: string) => void;
  onPermanentDelete: (id: string) => void;
}

const TrashList = ({ tasks, onRestore, onPermanentDelete }: TrashListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-gray-400 text-lg">Trash is empty.</p>
        <p className="text-gray-400 text-sm mt-1">Deleted tasks will appear here.</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TrashCard
          key={task._id}
          task={task}
          onRestore={onRestore}
          onPermanentDelete={onPermanentDelete}
        />
      ))}
    </div>
  );
};

export default TrashList;