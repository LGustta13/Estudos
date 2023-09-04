#Comentários relevantes
** eleva a um expoente
Usar o ponto(.) para separar inteiro de fracionário
comentários (# sustenido)

#Marcadores
%d -> inteiros decimais
%s -> strings
%f -> números flutuantes
%3.2f -> (3 número de caracteres).(2 casas decimais)(f ponto flutuante)

#Input
int(input()) -> entrada inteira
float(input()) -> entrada flutuante

# Convertendo Farenheit em Celsius
C = float(input("Digite o valor em Celsius: "))
F = ((9*C)/5) + 32
print("Temperatura: %4.2f ºF" %F)

# Recebendo o salário no final do mês
salario = float(input("Digite o valor recebido: "))
a = salario - 120.08
d = float(input("Inclua as despesas do mês: "))
a = a - d
print("Total a receber será de %7.2f reais" %a)
