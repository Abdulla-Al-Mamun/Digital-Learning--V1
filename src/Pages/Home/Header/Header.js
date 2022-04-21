import bg from '../../../Images/header-bg.jpg';
import React from 'react';
const Header = () => {
    const headerBg = {
        background: `url(${bg})`,
        height: '400px',
        backgroundPosition: 'center',
    }
    return (
        <div style={headerBg}>
            <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                <div>
                    <h1>World Best Courses!<br />
                        You Will Find Here!</h1>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit dolores ratione eius <br /> corporis sit, quod maiores provident maxime assumenda dolorum nihil incidunt culpa dolor fuga <br /> dignissimos labore architecto earum inventore debitis sequi consequuntur fugiat excepturi aut! Laudantium ut suscipit</p>
                    <br />
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;