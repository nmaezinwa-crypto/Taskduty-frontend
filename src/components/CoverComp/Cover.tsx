import { useNavigate } from 'react-router-dom';
import coverImg from '../../assets/image.png';

const Cover = () => {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-between px-16 py-20 bg-gray-100 min-h-[calc(100vh-64px)]">
      
      {/* Left Side - Text Content */}
      <div className="flex flex-col gap-6 max-w-lg">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Manage your Tasks on
          </h1>
          <h1 className="text-4xl font-bold text-purple-600 leading-tight">
            TaskDuty
          </h1>
        </div>

        <p className="text-gray-500 text-base leading-relaxed">
          Stay on top of your work with TaskDuty.
           Organize your tasks by priority,
          track your progress, and never miss a deadline again.
        </p>

        <button
          onClick={() => navigate('/tasks')}
          className="w-fit px-8 py-3 bg-purple-600 text-white font-medium rounded hover:bg-purple-700 transition-colors"
        >
          Go to My Tasks
        </button>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden md:flex items-center justify-center flex-1">
        <img
          src={coverImg}
          alt="Task Management Illustration"
          className="max-w-md w-full object-contain"
        />
      </div>

    </section>
  );
};

export default Cover;