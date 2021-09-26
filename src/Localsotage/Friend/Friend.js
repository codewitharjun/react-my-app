import './Friend.css'
import React from "react";
import {addToLocalFun, removeToLocalFun} from '../ClickHandelar/ClickHandelar';

const addToLocal = id => {
    addToLocalFun(id);
}
const removeToLocal = id => {
    removeToLocalFun(id);
}

function Friend (props) {
    // console.log(props.data);
    const {_id, company, address, email} = props.data;
    return (
        <div className= "friend-style">
            <h2>Conpany : {company}</h2>
            <h4>Address : {address}</h4>
            <h5>Email : {email}</h5>
            <button onClick= {() => addToLocal(_id)}>Add</button>
            <button onClick= {() => removeToLocal(_id)}>Remove</button>
        </div>
    )
}

export default Friend;