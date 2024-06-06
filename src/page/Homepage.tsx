import React from 'react';
import Navigation from "../components/Navigation";


const HomePage: React.FC = () => {
    return (
        <div>
            <Navigation/>
            <h2 className="home-title">Добро пожаловать на главную страницу!</h2>
        </div>
    );
}


export default HomePage;
