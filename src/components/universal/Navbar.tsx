import { Link } from 'react-router-dom';
import avatarImg from '../../assets/Avater.png';
import logoImg from '../../assets/Logo.png';

interface NavbarProps {
  showNewTask?: boolean;
  showAllTasks?: boolean;
}

const Navbar = ({ showNewTask = true, showAllTasks = true }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-gray-100">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
  <img src={logoImg} alt="TaskDuty Logo" className="w-8 h-8 object-contain" />
  <span className="font-semibold text-gray-800 text-lg">TaskDuty</span>
</Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        {showNewTask && (
          <Link
            to="/new-task"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            New Task
          </Link>
        )}
        {showAllTasks && (
          <Link
            to="/tasks"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            All Tasks
          </Link>
        )}
        {/* Avatar */}
        <img
          src={avatarImg}
          alt="User Avatar"
          className="w-9 h-9 rounded-full object-cover cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;