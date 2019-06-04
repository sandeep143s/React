import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ({ courses, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Emp_ID </th>
        <th>Emp_Name </th>
        <th>Department</th>
        <th>Manager</th>  
        <th>DOJ</th>
        <th>Ph_No</th>
        <th>DOB</th>
        <th>Salary</th>
        <th>Nationality</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {courses.map(course => {
        return (
          <tr key={course.id}>          
            <td></td>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.EmployeeName}</td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
            <td>{course.doj}</td>
            <td>{course.phno}</td>
            <td>{course.dob}</td>
            <td>{course.salary}</td>
            <td>{course.nationality}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(course)}
              >
                Delete
              </button>
            </td>
            <td>
              <Link  className="btn btn-outline-danger" to={"/course/" + course.slug}>Edit</Link>
            </td>            
          </tr>
        );
      })}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CourseList;
