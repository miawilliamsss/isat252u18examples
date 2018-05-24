# import code to be tested
from student import Student

# create a new instance (object)
# using my Student class
oscar = Student(fn = "Oscar", ln = "Mayer")

# create a SUPER simple generic Object
# class for mocking objects like 
# Courses and Professors
# from: https://programmingideaswithjake.wordpress.com/2016/05/07/object-literals-in-python/
class Object:
  def __init__(self, **attributes):
    self.__dict__.update(attributes)

mockProf = Object(
  first_name = "Morgan",
  last_name = "Benton",
  office = "ISAT/CS 124",
  email = "bentonmc@jmu.edu",
  greet = lambda: "Yo!")

mock252 = Object(
  name = "Programming and Problem Solving",
  department = "ISAT",
  number = "252",
  location = "ISAT/CS 337",
  instructor = mockProf)

def test_student_has_a_first_name():
  assert hasattr(oscar, "first_name")
  assert oscar.first_name == "Oscar"

def test_student_has_a_last_name():
  assert hasattr(oscar, "last_name")
  assert oscar.last_name == "Mayer"

def test_student_has_courses():
  assert hasattr(oscar, "courses")
  assert type(oscar.courses) is list

def test_student_can_enroll_in_a_course():
  num_courses = len(oscar.courses)
  oscar.enroll(mock252)
  assert len(oscar.courses) == num_courses + 1
  assert oscar.courses[num_courses].name == "Programming and Problem Solving"
  assert oscar.courses[num_courses].instructor.first_name == "Morgan"