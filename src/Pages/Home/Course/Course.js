import React from 'react';
import './Course.css';
const Course = (props) => {
    const {img, name, price} = props.course;
    return (
        <div className='course-container'>
            <img style={{ width: 'auto', height: '80px', margin: '0 auto' }} src={img} alt="" />
            <h5>{name}</h5>
            <h5> Price:{price}</h5>
            <button>Enroll Now</button>    
        </div>
    );
};

export default Course;