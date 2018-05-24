class Student:

  courses = []

  def __init__(self, fn = "", ln = ""):
    self.first_name = fn
    self.last_name  = ln

  def enroll(self, course):
    self.courses.append(course)