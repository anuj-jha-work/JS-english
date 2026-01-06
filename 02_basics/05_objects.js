//Object de-structure and JSON API
const course = {
    courseName: "JavaScript In Hinglish",
    price: 299,
    courseInstructor: "Hitesh"
}
//course.courseInstructor
//for better visibilty in lonmg codes
const {courseInstructor} = course;
console.log(courseInstructor)
//if this name seems huge change as per your choice
const {courseInstructor:inst} = course;
console.log(inst);

//JSON => JavaScript Object Notation
// {
//     "name":"Hitesh",
//     "course":"JavaScript In Hinglish",
//     "price":299
// }