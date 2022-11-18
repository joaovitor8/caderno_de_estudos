#Escreva um programa que receba um valor que calcule e retorne a soma de todos os numeros ate chegar no valor

n = int(input("Informe um valor: "))
soma = 0

for i in range(1, n + 1):
    soma += i

print(soma)
