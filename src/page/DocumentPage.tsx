import React from "react";
import Navigation from "../components/Navigation";
import"./home.css"

const DocumentPage: React.FC = () => {
    return (
        <>
            <Navigation/>
            <h1 className="home-title">Добро пожаловать в систему управления сотрудниками!</h1>
        </>
    )
}



export default DocumentPage;