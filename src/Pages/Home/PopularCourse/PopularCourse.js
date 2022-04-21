import React from 'react';
import './PopularCourse.css';
const PopularCourse = (props) => {
  const { img, text, name } = props.popularCourse;
  return (
    <div className='popular-course-container'>
        <img style={{ width: 'auto', height: '80px', margin: '0 auto' }} src={img} alt="" />
        <h5>{name}</h5>
        <p style={{ textAlign: 'left' }}>{text}</p>
        <button>Enroll Now</button>
    </div>
  );
};

export default PopularCourse;