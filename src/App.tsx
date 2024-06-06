import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './page/Login';
import HomePage from './page/Homepage';
import PrivateRoute from './router/PrivateRoute';
import EmployeePage from "./page/EmployeePage";
import DocumentPage from "./page/DocumentPage";

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/employees" element={<EmployeePage/>}/>
                        <Route path="/documents" element={<DocumentPage/>}/>
                    </Route>
                    <Route path="*" element={<Navigate to="/login"/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;
