import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import AllTasks from './pages/AllTasks';
import FinishedTasks from './pages/FinishedTasks';
import Homepage from './pages/Homepage';
import OpenedTasks from './pages/OpenedTasks';
import Register from './pages/Register';

type Props = {
  mobile: boolean;
};

const routes = ({ mobile }: Props) => {
  return (
    <Routes>
      {mobile && <Route path="/" element={<Menu mobile={mobile} />} />}
      {!mobile && <Route path="/" element={<Homepage />} />}
      <Route path="/registerTask" element={<Register mobile={mobile} />} />
      <Route path="/registerTask/:id" element={<Register mobile={mobile} />} />
      <Route path="/allTasks" element={<AllTasks mobile={mobile} />} />
      <Route path="/openedTasks" element={<OpenedTasks mobile={mobile} />} />
      <Route
        path="/finishedTasks"
        element={<FinishedTasks mobile={mobile} />}
      />
    </Routes>
  );
};

export default routes;
