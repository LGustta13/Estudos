# python src/test_square.py
# python -m unittest test_square.py quando não tiver o main()

from unittest import main, TestCase # Preparação

def square(x):  # Ambiente
    return x ** 2

class TestSquare(TestCase):  # Caso de teste
    
    def test_if_returns_square_of_2(self): # Cada método é um caso de teste
        result = square(2)
        expected = 4
        self.assertEqual(result, expected) # Asserção

    def test_if_returns_square_of_0(self):
        result = square(0)
        expected = 0
        self.assertEqual(result, expected)
    
    def test_if_returns_square_of_4(self):  # Forçando um erro
        result = square(4)
        expected = 3
        self.assertEqual(result, expected)

if __name__ == '__main__':
    
    main() # TestRunner