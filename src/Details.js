import React from 'react';

const Details = (props) => {
    const {title, description, id} = props.location.state
    return <div>Title: {title},<br /> Description: {description},<br/> Id: {id}</div>
}
export default Details
