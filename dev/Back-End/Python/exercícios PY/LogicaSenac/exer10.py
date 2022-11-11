# faça um programa que receba o genero 1-homem 2-mulher e a altura
# construa um algoritmo que calcule sue peso ideal usando a formula:
# 1-homem (72.7 * altura) - 58
# 2-mulher (62.1 * altura) - 44.7



genero = int(input('Qual seu genero? Digite 1 para homem ou 2 para mulher: '))
altura = float(input('Qual sua altuta?: '))

if genero == 1:
    peso = (72.7 * altura) - 58
    print(f'Seu peso ideal é de {peso}')
elif genero == 2:
    peso = (62.1 * altura) - 44.7
    print(f'Seu peso ideal é de {peso}')
else:
    print('erro')
