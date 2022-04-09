import { Navbar } from './Components/Navbar';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Employees } from './Components/Employees';
import { EmployeePage } from './Components/EmployeePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* / - Home ( display profile of user who has logged in )
      /register - Register
      /login - login
      /employees - List all users
      /employees/create - Create New Employee
      /employees/:id - Show Details of a single employee;
      /employees/:id/edit - Edit Employee Details */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/employees" element={<Employees />}/>
        <Route path="/employees/create" element={<EmployeeCreate />}/>
        <Route path="/employees/:id" element={<EmployeePage />}/>
        <Route path="/employees/:id/edit" element={<EmployeeEdit />}/>
      </Routes>
    </div>
  );
}

export default App;
