# Faça um programa que receba uma medida em centimetros e permita o usuario escolher se ele vai converter em 
# 1-polegar 2.54 
# 2-pe  30.48
# 3-jarda   91.44
# e moste o tipo de converção escolido e o valor

from tkinter import CENTER


escolher = int(input('Digite 1-Polegar | 2-Pe | 3-Jarda: '))
cent = int(input('Digite quantos centumetros vc quer converter: '))

if escolher == 1:
    pole = cent / 2.54
    print(f'Converção escolida foi {escolher}:  {pole}')
elif escolher == 2:
    pe = cent / 30.48
    print(f'Converção escolida foi {escolher}:  {pe}')
elif escolher == 3:
    jarda = cent / 91.44
    print(f'Converção escolida foi {escolher}:  {jarda}')
else:
    print('Erro')
