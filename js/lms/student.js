// Here is where we'll implement
// the Student class

function Student(props) {
  this.first_name = props.first_name || "";
  this.last_name  = props.last_name  || "";
  this.courses    = [];
}

module.exports = Student;