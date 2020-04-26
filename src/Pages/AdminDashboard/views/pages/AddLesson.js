import React from 'react';
import { NavLink } from 'react-router-dom';

function AddLesson(){
    return (
        <div>
            <div className="m-t-xxl text-center">
                <h1 className="error-number">Add Lesson</h1>
                <h3 className="m-b">Here goes the lesson!</h3>
                <NavLink to={'/dashboard/home'}>Go Home!</NavLink>
            </div>
        </div>
    );
}

export default AddLesson;