import React from 'react';
import photoshop from '../../../Images/Graphic/Adobe-Photoshop.png';
import illustrator from '../../../Images/Graphic/Adobe-Illustrator.png';
import inDesign from '../../../Images/Graphic/Adobe-InDesign.png';
import premierePro from '../../../Images/Video Editing/Adobe-Premiere-Pro.png';
import afterEffects from '../../../Images/Video Editing/Adobe-After-Effects.png';
import audition from '../../../Images/Video Editing/Adobe-Audition.png';
import python from '../../../Images/Programming Languages/python.png';
import javascript from '../../../Images/Programming Languages/Javascript-03.png';
import java from '../../../Images/Programming Languages/java.png';
import Course from '../Course/Course';
import './AllCourse.css';
const allCourse = () => {
  const allCourse = [
    { img: photoshop, name: 'Photoshop', price: '1K' },
    { img: illustrator, name: 'Illustrator', price: '1.5K' },
    { img: inDesign, name: 'InDesign', price: '2K' },
    { img: photoshop, name: 'Photoshop', price: '1K' },

    { img: premierePro, name: 'PremierePro', price: '2.5K' },
    { img: afterEffects, name: 'AfterEffects', price: '3K' },
    { img: audition, name: 'Audition', price: '1.5K' },
    { img: premierePro, name: 'PremierePro', price: '2.5K' },

    { img: python, name: 'Python', price: '2.5K' },
    { img: javascript, name: 'Javascript', price: '3K' },
    { img: java, name: 'Java', price: '1.5K' },
    { img: python, name: 'Python', price: '2.5K' },
  ]
  return (
    <div style={{margin:'0 10%'}}>
      <h1> All Course</h1>
      <div className='all-course-container'>
        {
          allCourse.map(course => <Course key={course.name} course={course}></Course>)
        }
      </div>
    </div>
  );
};

export default allCourse;