import React from 'react';
import photoshop from '../../../Images/Graphic/Adobe-Photoshop.png';
import premiere from '../../../Images/Video Editing/Adobe-Premiere-Pro.png';
import python from '../../../Images/Programming Languages/python.png';
import PopularCourse from '../PopularCourse/PopularCourse';
import './PopularCourses.css';
const PopularCourses = () => {
    const popularCourses = [
        {
            img: photoshop,
            name: 'Photoshop',
            text: 'Create beautiful images, graphics, paintings on your desktop and iPad.'
        },
        {
            img: premiere,
            name: 'Premiere',
            text: 'Social media creators love Adobe Premiere Rush, Facebook and beyond..'
        },
        {
            img: python,
            name: 'Python',
            text: 'Python is a general-purpose, versatile and popular programming language.'
        },
    ]
    return (
        <div style={{margin:'0 20%'}}>
            <h1>Popular Courses</h1>
            <div className='popular-courses-container'>
                {
                    popularCourses.map(popularCourse => <PopularCourse key={popularCourse.name} popularCourse={popularCourse}></PopularCourse>)
                }
            </div>
        </div>
    );
};

export default PopularCourses;