import PropsTypes from "prop-types";
import React from "react";
function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student:{props.isStudent ? "Yes" : "No"} </p>
        </div>
    );
}
Student.propsTypes={
    name: PropsTypes.string,
    age: PropsTypes.number,
    isStudent: PropsTypes.bool,
}

Student.defaultProps={
    name: "Unknown",
    age: 0,
    isStudent: false,
}
export default Student;