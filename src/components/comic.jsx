import React from 'react';
import {Link} from 'react-router-dom';

function character(props){
    return <div>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
        <Link to={"/comics/" + props.id}><img src={props.thumbnail.path + '.jpg'} alt=""/></Link>
    </div>
}

export default character;