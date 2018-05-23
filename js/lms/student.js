// Here is where we'll implement
// the Student class

function Student(props) {
  props = props || {};
  this.first_name = props.first_name || "";
  this.last_name  = props.last_name  || "";
  this.courses    = [];
  this.enroll = function(course) {
    this.courses.push(course);
  };
}

module.exports = Student;