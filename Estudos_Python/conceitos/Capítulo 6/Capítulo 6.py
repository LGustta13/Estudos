# Listas
#Cálculo de médias
notas = [0,0,0,0,0]
soma = 0
x = 0
while x<5:
    notas[x]=float(input("Nota %d: " %x))
    soma = soma + notas[x]
    x = x+1
print("Média de %3.2f" %(soma/x))

#Fazendo a cópia de uma lista
a = [0,1,2,3,4,5]
b = a[:]    # Copia o conteúdo do endereço de memória

a = [0,1,2,3,4,5]
b = a       # Copia o endereço de memória, se alterar valor as duas listas se alteram

#Tamanho do vetor
len(vetor)

#Inserir elemento na última posição, ou uma lista na última posição
vetor.append(valor)

#Inserir os elementos de uma lista em outra lista
vetor.extend(valor)

#Remover elementos da lista
del vetor[índice]

#Remove e retorna o elemento da lista
vetor.pop(índice)

#Comando que pula linha
"\n"

#Criar uma lista com escala definida
list(range(inicio,fim))

#Estrutura de repetição for em um alista
for variável in lista: #variável recebe o primeiro elemento da lista, usado para passar elemento por elemento (ELEMENTO!!)
                        # É possível usar um for dentro de outro for

#Range: usado para gerar listas simples
for vetor in range(valor inicial, valor final, intervalo de amostragem)
L=list(range(100,1100,50))
print(L)        #gera uma lista

#Acessando as strings em uma lista
S=["maçãs","peras","kiwis"]
print(S[0][0])  #m
print(S[0][1])  #a
print(S[1][2])  #r
print(S[2][3])  #i

#Algoritmo de ordenação






    


