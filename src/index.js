
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';

function App(){

    return <>
    <div className="container">
    <div className="row">
    <div className="col-12 mt-5">
    <div className="text-center my-5">
    <h3>Complete React Form!</h3></div>
    <Form/>
    </div></div></div>
    </>

}

ReactDOM.render(<App/>,document.getElementById('app'));
