import React, { Component } from 'react';
import panting from "../../pantings.json"
import s from "./Panting.module.css"


const data = panting[0];


class Panting extends Component{
    
    render() {
        return (
            <div className={s.Panting}>
                <img className={s.ImgPanting} src={data.url} alt={data.title}/>
                <h2>{ data.title}</h2>
                <p>Avthor: <a href={data.author.url}>{ data.author.tag}</a></p>
                <p>Price: {data.price} usd</p>
                <p>Quantity:how much is left </p>
                <button type="button">Add to cart</button>,
            </div>
        );
    } 
}



export default Panting;