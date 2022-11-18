# faça um programa que peça 10 numeros inteiros, calcule e mostre a quantidade de numeros pares e numeros impares

totimpar = 0
totpar = 0

for i in range(1, 11):
    num = int(input('Informe o numero: '))
    if num % 2 == 0:
        totpar += 1
    elif num % 2 == 1:
        totimpar += 1

print(f'Vc digitou {totpar} numeros pares e {totimpar} numeros impares')







