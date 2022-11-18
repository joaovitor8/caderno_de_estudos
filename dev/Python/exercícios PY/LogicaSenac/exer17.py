#Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

#Desconto do IR:
#Salário Bruto até 900 (inclusive) - isento
#Salário Bruto até 1500 (inclusive) - desconto de 5%
#Salário Bruto até 2500 (inclusive) - desconto de 10%
#Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
#        Salário Bruto: (5 * 220)        : R$ 1100,00
#        (-) IR (5%)                     : R$   55,00  
#        (-) INSS ( 10%)                 : R$  110,00
#        (-) SINDICADO                   : R$   33.00
#        FGTS (11%)                      : R$  121,00
#        Total de descontos              : R$  165,00
#        Salário Liquido                 : R$  935,00

valorhora = float(input('Quando vc ganha por hora?: R$'))
meshoras = int(input("Quantas horas vc trabalha no mes?: "))

salariobruto = valorhora * meshoras

if salariobruto <= 900:
    ir = 0
    inss = salariobruto * 10 / 100
    sindicado = salariobruto * 3 / 100
    fgts = salariobruto * 11 /100
    desconto = ir + inss + sindicado
    salarioliquido = salariobruto - desconto
elif salariobruto >= 901 and salariobruto <= 1500:
    ir = salariobruto * 5 / 100
    inss = salariobruto * 10 / 100
    sindicado = salariobruto * 3 / 100
    fgts = salariobruto * 11 / 100
    desconto = ir + inss + sindicado
    salarioliquido = salariobruto - desconto
elif salariobruto >= 1501 and salariobruto <= 2500:
    ir = salariobruto * 10 / 100
    inss = salariobruto * 10 / 100
    sindicado = salariobruto * 3 / 100
    fgts = salariobruto * 11 /100
    desconto = ir + inss + sindicado
    salarioliquido = salariobruto - desconto
elif salariobruto > 2501:
    ir = salariobruto * 20 / 100
    inss = salariobruto * 10 / 100
    sindicado = salariobruto * 3 / 100
    fgts = salariobruto * 11 /100
    desconto = ir + inss + sindicado
    salarioliquido = salariobruto - desconto

print(f'Salario Bruto     : {salariobruto}')
print(f'IR                : {ir}')
print(f'INSS              : {inss}')
print(f'Sindicado         : {sindicado}')
print(f'FGTS              : {fgts}')
print(f'Total de descontos: {desconto}')
print(f'Salario Liquido   : {salarioliquido}')
