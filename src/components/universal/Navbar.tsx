import { Link, useNavigate } from 'react-router-dom';
import avatarImg from '../../assets/Avater.png';
import logoImg from '../../assets/Logo.png';
import { authService } from '../../services/authService';

interface NavbarProps {
  showNewTask?: boolean;
  showAllTasks?: boolean;
}

const Navbar = ({ showNewTask = true, showAllTasks = true }: NavbarProps) => {
  const navigate = useNavigate();
  const user = authService.getUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

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
          
         {/* Trash Link */}
          <Link
          to="/trash"
          className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
         🗑 Trash
        </Link>
        
        {/* User name */}
        {user && (
          <span className="text-gray-700 font-medium text-sm">
            Hi, {user.name}!
          </span>
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
        >
          Logout
        </button>
       {/* Avatar - clickable to profile */}
      <img
       src={avatarImg}
      alt="User Avatar"
      onClick={() => navigate('/profile')}
      className="w-9 h-9 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
       />
      </div>

    </nav>
  );
};

export default Navbar;