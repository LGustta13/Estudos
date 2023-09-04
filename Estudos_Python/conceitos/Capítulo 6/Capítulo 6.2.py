lista1=[]
lista2=[]
lista3=[]
x=0
y=0

print("Inserir os elementos da primeira lista")
while True:
    x=int(input("0 para parar: "))
    lista1.append(x)
    if x==0:
        break

print("Inserir os elementos da segunda lista")
while True:
    y=int(input("0 para parar: "))
    lista2.append(y)
    if y==0:
        break

print(lista3.extend(lista1+lista2))
