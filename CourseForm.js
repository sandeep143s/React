import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import DatePick from "../common/DatePicker";
import { NavLink } from "react-router-dom";

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Employee</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Employee ID"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        name="EmployeeName"
        label="Employee Name"
        value={course.EmployeeName}
        onChange={onChange}
        error={errors.EmployeeName}
      />
      <SelectInput
        name="authorId"
        label="Department"
        value={course.authorId || ""}
        defaultOption="Select Department"
        options={authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Manager"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />    

<DatePick 
        name = "doj"
        label="Date of Joining"
        value={course.doj}
        onChange={onChange} 
        className="form-control"
        error={errors.dob}
      />
      <TextInput
        name="phno"
        label="Phone Number"
        value={course.phno}
        onChange={onChange}
        error={errors.phno}
      />

<DatePick 
        name = "dob"
        label="Date of Birth"
        value={course.dob}
        onChange={onChange} 
        className="form-control"
        error={errors.dob}
      />
       <TextInput
        name="salary"
        label="Salary"
        value={course.salary}
        onChange={onChange}
        error={errors.salary}
      />

      <TextInput
        name="nationality"
        label="Nationality"
        value={course.nationality}
        onChange={onChange}
        error={errors.nationality}
      />
      
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button><br/>
      <nav>
      <NavLink to="/" >
       Return
      </NavLink>
    </nav>
    </form>
  );
};

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CourseForm;
