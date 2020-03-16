import React from 'react';

const Scroll = (props) =>  {
    return (
        <div style={{overflowY:'scroll', border: '1px solid black', hight: '50px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;   