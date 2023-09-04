# Capítulo 4 - Condições
#if a>b:
#<condição>

idade = int(input("Digite a idade do seu carro: "))
if idade>6:
    print("Seu carro está velho!")

elif idade<5:
    print("Seu carro está novo!")

elif idade == 5:
    print("??")

else:
    print("Vi um 6")
