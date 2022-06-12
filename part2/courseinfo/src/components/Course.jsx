import React from "react";
import Content from "./Content";
import Header from "./Header";
import { TotalExercises } from "./TotalExercises";

export const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <TotalExercises course={course} />
          </div>
        );
      })}
    </div>
  );
};
