import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { TaskFormPage }  from './pages/TaskFormPage'

function app() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<TasksPage />} />
    <Route path='/tasks-create' element={<TaskFormPage />} />
    </Routes>
    </BrowserRouter>
  );
}
export default app;
