# Faça um programa que peça 4 notas bimestrais e mostre a media

nota1 = float(input('Nota do primeiro bimestre: '))
nota2 = float(input('Nota do segundo bimestre: '))
nota3 = float(input('Nota do terceiro bimestre: '))
nota4 = float(input('Nota do quarto bimestre: '))

media = (nota1 + nota2 + nota3 + nota4) / 4

print(f'Sua nota final é {media}')

if media < 6:
    print('Reprovado')
else:
    print('Aprovado')
