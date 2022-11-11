#faça um programa que leia 3 preços de um priduto e fale qual devo comprar sabendo que a decisao é sempre o mais barato

n1 = float(input('Digite  1° preço: R$ '))
n2 = float(input('Digite  2° preço: R$ '))
n3 = float(input('Digite  3° proço: R$ '))


if n1 < n2 and n1 < n3:
    menor = n1
elif n2 < n1 and n2 < n3:
    menor = n2
elif n3 < n1 and n3 < n2:
    menor = n3

print(f'o menor preço é R${menor}.')
