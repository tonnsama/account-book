import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowTableButton from './components/ShowTable';

const App = () => {
  return (
    <>
      <h1>おもち家計簿</h1>
      <ShowTableButton/>
    </>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
