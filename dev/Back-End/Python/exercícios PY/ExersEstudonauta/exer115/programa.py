import funcoes

funcoes.linha()
print('               MENU PRINCIPAL')
funcoes.linha()

print(f'{funcoes.corAmarelo()}1{funcoes.semCor()} - {funcoes.corAzul()}Ver pessoas cadastradas{funcoes.semCor()}')
print(f'{funcoes.corAmarelo()}2{funcoes.semCor()} - {funcoes.corAzul()}Cadastrar nova Pessoa{funcoes.semCor()}')
print(f'{funcoes.corAmarelo()}3{funcoes.semCor()} - {funcoes.corAzul()}Sair do Sistema{funcoes.semCor()}')

funcoes.linha()

opcao = int(input('Sua Opção: '))

try:
    opcao
except:
    print('erro')
else:
    print('certo')