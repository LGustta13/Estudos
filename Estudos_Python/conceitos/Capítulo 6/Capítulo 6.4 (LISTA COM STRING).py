compras=[]
while True:
    x=input("Alimento para comprar: ")
    if x=="fim":
        break
    compras.append(x)
for e in compras:
    print(e)
