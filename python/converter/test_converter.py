# import pytest for using utilities
from pytest import approx

# import the code to be tested
from converter import CtoF, FtoC

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
  assert CtoF(-17.78) == approx(0, abs=0.01)

# test conversion from F to C
def test_FtoC():
  assert FtoC(32) == 0
  assert FtoC(212) == 100
  assert FtoC(50) == 10
  assert FtoC(71.6) == approx(22)
  assert FtoC(14) == -10
  assert FtoC(-4) == -20
  assert FtoC(0) == approx(-17.78, abs=0.01)
