import React from "react";
import Navigation from "../components/Navigation";

const EmployeePage: React.FC = () => {
    return (
        <>
            <Navigation/>
            <h1 style={home_title}>Сотрудники</h1>
        </>
    )
}

const home_title = {
    color: '#fff',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
}

export default EmployeePage;