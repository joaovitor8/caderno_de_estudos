# numa eleição existe 3 cantidados  faça um programa que peça o numero total de eleitores e peça para cada eleitor votar e ao final mostrar o numero de votos de cada eleitor

candidato1 = 0
candidato2 = 0
candidato3 = 0

eleitores = int(input('Quantos eleitores serão?: '))

for i in range(1, eleitores + 1):
    votos = int(input('Infome seu voto, 1, 2 ou 3 para os candidotos: '))
    if votos == 1:
        candidato1 += 1
    elif votos == 2:
        candidato2 += 1
    elif votos == 3:
        candidato3 += 1
    else:
        print('Erro')

print(f'Altodo foram {eleitores} eleitore e a votação foi:')
print(f'candidato1 teve {candidato1} votos')
print(f'candidato2 teve {candidato2} votos')
print(f'candidato3 teve {candidato3} votos')
