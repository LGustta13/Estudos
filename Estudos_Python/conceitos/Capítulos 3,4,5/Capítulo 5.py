# Capítulo 5 - Repetição
# while <condição>
# bloco

#x=0
#while x<=10:
#    print(x)
#    x=x+1

# Contador
#fim = int(input("Digite o último número: "))
#x = 0
#while x<=fim:
#    if (x%2)==0:
#        print(x)
#    x=x+1

# Acumulador
#valor = int(input("Números de valores para a média: "))
#n = 1
#soma = 0
#while n<=valor:
#    x = int(input("Digite o %dº número: " %n))
#    n=n+1
#    soma = soma+x
#media = soma/valor
#print("Média: %5.1f" %media)

# Tabuada
#n = 0
#while n<11:    
#    n = int(input("Tabuada de... "))
#    a = 0;
#    if n<11:
#        while a<=10:
#            b = a*n
#            print("Print 2 x %d = %3.1f" %(a, b))
#            a = a+1
#    else:
#        a = a+1

# Utilizando o break
s = 0
while True:
    v = int(input("Digite um número a somar, tecle 0 para sair: "))
    if v==0:
        break
    s = s+v
print(s)

