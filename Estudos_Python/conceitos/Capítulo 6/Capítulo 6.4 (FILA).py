último = 10
fila = list(range(último+1))
while True:
    print("\nExixtem %d clientes na fila" %len(fila))
    print("Fila atual: ", fila)
    print("Digite F para adicionar um cliente ao fim da fila,")
    print("ou A para realizar o atendimento. S para sair.")
    operação = input("\nOperação (F, A ou S):")
    if operação == "A":
        if len(fila)>0:
            atendido = fila.pop(0)
            print("\nCliente %d atendido" %atendido)
        else:
            print("\nFila vazia!")
    elif operação == "F":
        último+=1
        fila.append(último)
    elif operação == "S":
        break
    else:
        print("\nOperação inválida!")
