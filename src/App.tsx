import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoverPage from './pages/CoverPage';
import TasksPage from './pages/MyTaskPage';
import NewTaskPage from './pages/NewTaskPage';
import EditTaskPage from './pages/EditTaskPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/new-task" element={<NewTaskPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;