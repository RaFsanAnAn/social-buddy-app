import React from 'react';

const Header = () => {
    const headerStyle ={
        padding : '20px',
        margin : '20px',
        color : 'white',
        backgroundColor : '#990033',
        textAlign : 'center'
    }
    return (
        <div style = {headerStyle}>
            <h1>Social Buddy</h1>
        </div>
    );
};

export default Header;