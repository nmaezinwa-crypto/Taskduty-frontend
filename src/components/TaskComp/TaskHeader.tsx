import { useNavigate } from 'react-router-dom';

const TaskHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-10 py-6">
      <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
      <button
        onClick={() => navigate('/new-task')}
        className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
      >
        + Add New Task
      </button>
    </div>
  );
};

export default TaskHeader;