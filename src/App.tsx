import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './AppLayout';
function App() {
  return (
    <Routes>
      <Route path="/*" element={<AppLayout />} />
    </Routes>
  );
}

export default App;
