import React from 'react';
import { BrowserRouter, Route , Link} from "react-router-dom";


function Soda() {
    return (
    <div>
        <h1>Hello Soda!</h1>
        <Link to="/">Return</Link>
    </div>
    );
}

export default Soda;