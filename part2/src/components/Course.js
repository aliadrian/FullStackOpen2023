import Header from './Header'
import Part from './Part'

const Course = ({ course }) => {

  const calculateTotalOfExercises = (parts) => {
    return parts.reduce((sum, part) => sum + part.exercises, 0);
  }

  // console.log(course);
  return (
    <div>
      {course.map((courseObj) => (
        <div key={courseObj.id}>
          <Header course={courseObj} />
          {courseObj.parts.map((part) => (
            <Part key={part.id} part={part} />
          ))}
          <strong>total of {calculateTotalOfExercises(courseObj.parts)} exercises</strong>
        </div>
      ))}
    </div>
  );
};


export default Course