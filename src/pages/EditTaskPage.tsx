import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/universal/Navbar';
import FormInput from '../components/TaskComp/FormInput';
import TagsSelector from '../components/TaskComp/TagsSelector';
import BackToTop from '../components/TaskComp/BackToTop';
import useTasks from '../hooks/useTask';
import type { ITask, Category } from '../types/index';

const EditTaskPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const task = location.state?.task as ITask;

  const { updateTask, loading, error } = useTasks();

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [dueDate, setDueDate] = useState(
    task?.dueDate ? task.dueDate.split('T')[0] : ''
  );
  const [category, setCategory] = useState<Category>(task?.category || 'Personal');

  const handleSubmit = async () => {
    if (!title || !description || !dueDate) {
      alert('Please fill in all fields.');
      return;
    }
    const success = await updateTask(task._id, { title, description, dueDate, category });
    if (success) navigate('/tasks');
  };

  if (!task) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Task not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar showNewTask={false} showAllTasks={true} />

      <div className="max-w-2xl mx-auto px-6 py-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-gray-700 font-semibold text-2xl mb-8 hover:text-purple-600 transition-colors"
        >
          ‹ Edit Task
        </button>

        <div className="flex flex-col gap-4">
          <FormInput
            label="Task Title"
            value={title}
            onChange={setTitle}
            placeholder="E.g. Project Defense, Assignment..."
          />

          <FormInput
            label="Description"
            value={description}
            onChange={setDescription}
            placeholder="Briefly describe your task..."
            type="textarea"
          />

          <FormInput
            label="Due Date"
            value={dueDate}
            onChange={setDueDate}
            type="date"
          />

          <TagsSelector selected={category} onChange={setCategory} />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 bg-purple-600 text-white font-medium rounded hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Done'}
          </button>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default EditTaskPage;