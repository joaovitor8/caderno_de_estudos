# Faça um programa que pergunte quando vc ganha por hora e o numero de horas trabalhadas no mes, calcule e mostre o total do seu salario

ganho = float(input('Ganho por hora: '))
hora = int(input('Horas trabalhadas no mes: '))

salario = ganho * hora

print(f'Seu salario no final do mes é {salario}')