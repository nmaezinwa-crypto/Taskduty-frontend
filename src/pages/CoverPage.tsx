import Navbar from '../components/universal/Navbar';
import Cover from '../components/CoverComp/Cover';

const CoverPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar showNewTask={true} showAllTasks={true} />
      <Cover />
    </div>
  );
};

export default CoverPage;