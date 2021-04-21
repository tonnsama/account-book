import React from 'react';
import axios from 'axios';


const ShowTableButton = () => {
    const [table, setTable] = React.useState();
    const handleClick = () => {
        axios
            .get('https://omoti-api/v1/incomes')
            .then(res => setTable(res))
            .catch(err => alert(err));
    }
    return (
        <>
            <button onClick={handleClick}>
                収入テーブルを表示
            </button>
            <p>{table}</p>
        </>
    );
};

export default ShowTableButton;
