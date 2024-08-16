import React, { useState, useEffect } from "react";
import Row from "./Row";

const listApartments = async (p: number) => {
    const response = await fetch(`http://localhost:8000/api/apartments?page=${p}&limit=10`);
    const data = await response.json();
    return data;
};

const Form = () => {
    const [rows, setRows] = useState([]);
    
    useEffect(() => {
        let data = listApartments(1);
        let names = data.map((d) => d.name);
        let newRows = names.map((name) => <Row name={name} />);
    }, []);
    
    return (
        <div>
        {rows.map((row, index) => (
            <div key={index}>{row}</div>
        ))}
        </div>
    );
}


