L = list(range(0,10001,10))
máximo = L[0]
for e in L:
    if e>=máximo:
        máximo = e
print(máximo)
