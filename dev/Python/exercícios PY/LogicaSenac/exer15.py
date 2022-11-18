#faça um programa que leia 3 numeros  e coloque em ordem decrecente

n1 = int(input('Digite  1° número: '))
n2 = int(input('Digite  2° número: '))
n3 = int(input('Digite  3° número: '))

if n1 > n2 and n1 > n3:
    maior = n1
elif n2 > n1 and n2 > n3:
    maior = n2
elif n3 > n1 and n3 > n2:
    maior = n3

if n1 > n2 and n1 < n3 or n1 < n2 and n1 > n3:
    meio = n1
elif n2 > n1 and n2 < n3 or n2 < n1 and n2 > n3:
    meio = n2
elif n3 > n2 and n3 < n1 or n3 < n2 and n3 > n1:
    meio = n3

if n1 < n2 and n1 < n3:
    menor = n1
elif n2 < n1 and n2 < n3:
    menor = n2
elif n3 < n1 and n3 < n2:
    menor = n3

print(f'{maior}, {meio}, {menor},')
