# Faça um programa que leia 10 numeros e informe a soma e a media deles

soma = 0

for i in range(1, 11):
    num = int(input('Informe o numero: '))
    soma += num

media = soma / 10

print(f' A Media de todos os numeros informados é {media} e a soma é {soma}')
