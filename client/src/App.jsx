import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
function app() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/Tasks" />} />
        <Route path="/tasks" element={<TasksFormPage />} />
        <Route path="/tasks-create" element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default app;
