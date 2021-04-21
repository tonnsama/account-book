import React from 'react';

const CountButton = () => {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>
        </>
    );
};

export default CountButton;
