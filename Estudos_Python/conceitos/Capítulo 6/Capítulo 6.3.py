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

x=0
y=0

while x<len(lista1):
    if (lista1[x])!=(lista2[y-1]):
        if y==len(lista2):
            lista3.append(lista1[x])
            y=0
            x+=1
        else:
            y+=1
    else:
        y=0
        x+=1
x=0
y=0

while y<len(lista2):
    if (lista2[y])!=(lista1[x-1]):
        if x==len(lista1):
            lista3.append(lista2[y])
            x=0
            y+=1
        else:
            x+=1
    else:
        x=0
        y+=1
