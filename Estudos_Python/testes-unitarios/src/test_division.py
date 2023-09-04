# python src/test_division.py
# python -m unittest test_division.py quando não tiver o main()

from unittest import main, TestCase
from random import randint

def divisionDetect(num, den) -> bool:
    try:
        num/den
    except:
        return False
    else:
        return True

class TestDivisionDetect(TestCase):
    def setUp(self) -> None: # Prehandler
        self.random_num = randint(0,100000)
        self.random_den = randint(0,100000)
    
    def test_if_returns_true_if_division_by_number_is_succesful(self):
        result = divisionDetect(self.random_num, self.random_den)
        self.assertTrue(result)

    def test_if_returns_fale_if_division_is_not_possible(self):
        result = divisionDetect(self.random_num, 0)
        self.assertFalse(result)
    
if __name__ == "__main__":
    main()