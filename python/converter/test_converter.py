# import the code to be tested
from converter import CtoF

# write a smoke test
def test_smoke():
  assert True == True

# test conversion from C to F
def test_CtoF():
  assert CtoF(0) == 32
  assert CtoF(100) == 212
  assert CtoF(10) == 50
  assert CtoF(22) == 71.6
  assert CtoF(-10) == 14
  assert CtoF(-20) == -4
  assert CtoF(-17.78) == 0
