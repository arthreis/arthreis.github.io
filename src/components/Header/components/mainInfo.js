import React from 'react';

const style = {
    background: '#7159c1',
    color: 'white',
};

const MainInfo = (props) => {
    const { info } = props;
    console.log(info);

    return (
            <div style={style}>
                I'M <span>{ info.fullname }</span>
            </div>
    );
};

export default MainInfo;
