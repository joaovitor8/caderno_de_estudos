#Faça um programa que leio 3 numeros e mostre o maior e menor deles

n1 = float(input('Digite  1° número: '))
n2 = float(input('Digite  2° número: '))
n3 = float(input('Digite  3° número: '))


maior = 0
menor = 0


if n1 < menor:
    menor = n1
elif n2 < menor:
    menor = n2
elif n3 < menor:
    menor = n3

if n1 > maior:
    maior = n1
if n2 > maior:
    maior = n2
if n3 > maior:
    maior = n3



print(f'O maior número da lista é {maior} e o menor é {menor}.')
