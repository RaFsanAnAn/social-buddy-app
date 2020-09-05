import React from 'react';

const NoMatch = () => {
    const divStyle = {
        textAlign : 'center',
        margin : '50px auto',
        color  : 'red'
    }
    return (
        <div style={divStyle}>
            <h1>404 ! Route not found!!! </h1>
        </div>
    );
};

export default NoMatch;