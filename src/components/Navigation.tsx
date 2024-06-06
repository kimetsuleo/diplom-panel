import React, {useEffect, useState} from 'react';
import {Employee} from "../model/Employee";
import {ErrorModel} from "../model/ErrorModel";
import axios from "axios";
import "./nav.css"
import {Link, Outlet} from "react-router-dom";

const Navigation: React.FC = () => {
    const [employee, setEmployee] = useState<Employee>();
    const [error, setError] = useState<ErrorModel>();
    const [isActive, setActive] = useState(false);

    const toggleActiveClass = () => {
        setActive(!isActive);
    };

    //clean up function to remove the active class
    const removeActive = () => {
        setActive(false)
    }

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('jwtToken');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:8080/api/v1/employees/me', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setEmployee(response.data);
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        const errorResponse: ErrorModel = error.response?.data;
                        setError(errorResponse);
                    }
                }
            }
        };

        fetchUserData();
    }, []);

    return (
        <nav className="navbar">
            <ul className="navMenu">
                <li onClick={removeActive}>
                    <Link to="/" className="navLink">Главная</Link>
                </li>
                <li onClick={removeActive}>
                    <Link to="/employees" className="navLink">Сотрудники</Link>
                </li>
                <li onClick={removeActive}>
                    <Link to="/documents" className="navLink">Документы</Link>
                </li>
            </ul>
            <li style={headerContentStyle}>
                {error ? (
                    <span>Error: {error.message}</span>
                ) : employee ? (
                    <span>{employee.firstName} {employee.lastName}</span>
                ) : (
                    <span>Loading...</span>
                )}
            </li>
            <Outlet/>
        </nav>
    );
};

const headerContentStyle = {
    display: 'flex',
    alignItems: 'center',
    border: 'solid',
    borderRadius: '12px',
    borderColor: 'white',
    color: 'white',
    padding: '12px',
};

export default Navigation;
