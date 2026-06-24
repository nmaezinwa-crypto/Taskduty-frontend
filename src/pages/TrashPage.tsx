import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/universal/Navbar';
import TrashList from '../components/TaskComp/TrashList';
import BackToTop from '../components/TaskComp/BackToTop';
import { taskService } from '../services/taskServices';
import type { ITask } from '../types/index';

const TrashPage = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrashedTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await taskService.getTrashedTasks();
      setTasks(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch trash');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrashedTasks();
  }, []);

  const handleRestore = async (id: string) => {
    try {
      await taskService.restoreTask(id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err: any) {
      setError(err.message || 'Failed to restore task');
    }
  };

  const handlePermanentDelete = async (id: string) => {
    const confirmed = window.confirm('Are you sure? This cannot be undone!');
    if (confirmed) {
      try {
        await taskService.permanentDeleteTask(id);
        setTasks((prev) => prev.filter((task) => task._id !== id));
      } catch (err: any) {
        setError(err.message || 'Failed to permanently delete task');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar showNewTask={true} showAllTasks={true} />

      <div className="px-10 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">🗑 Trash</h1>
          <button
            onClick={() => navigate('/tasks')}
            className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
          >
            ← Back to Tasks
          </button>
        </div>

        {loading && (
          <div className="flex justify-center py-20">
            <p className="text-gray-400">Loading trash...</p>
          </div>
        )}

        {error && (
          <div className="flex justify-center py-6">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <TrashList
            tasks={tasks}
            onRestore={handleRestore}
            onPermanentDelete={handlePermanentDelete}
          />
        )}
      </div>

      <BackToTop />
    </div>
  );
};

export default TrashPage;