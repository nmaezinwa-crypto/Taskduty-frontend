import { useNavigate } from 'react-router-dom';
import Navbar from '../components/universal/Navbar';
import TaskHeader from '../components/TaskComp/TaskHeader';
import TaskList from '../components/TaskComp/TaskList';
import BackToTop from '../components/TaskComp/BackToTop';
import useTasks from '../hooks/useTask';
import type { ITask } from '../types/index';


const TasksPage = () => {
  const navigate = useNavigate();
  const { tasks, loading, error, deleteTask } = useTasks();

  const handleEdit = (task: ITask) => {
    navigate(`/edit-task/${task._id}`, { state: { task } });
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    if (confirmed) await deleteTask(id);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar showNewTask={true} showAllTasks={false} />

      <TaskHeader />

      {loading && (
        <div className="flex justify-center py-20">
          <p className="text-gray-400">Loading tasks...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center py-6">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <TaskList
          tasks={tasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <BackToTop />
    </div>
  );
};

export default TasksPage;