import React from 'react';
import {Link} from 'react-router-dom';

function character(props){
    return <div>
        <h3>{props.name}</h3>
        <Link to={"/characters/" + props.id}><img src={props.thumbnail.path + '.jpg'} alt=""/></Link>
    </div>
}

export default character;