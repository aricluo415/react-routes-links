import React from 'react';
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <Link to="/soda">Soda</Link><br></br>
            <Link to="/chips">Chips</Link><br></br>
            <Link to="/chocolate">Chocolate</Link><br></br>
        </div>
    )
}

export default VendingMachine;