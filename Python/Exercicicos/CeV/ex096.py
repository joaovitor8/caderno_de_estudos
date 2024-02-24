def titulo():
  print("Controle de Terreno")
  print('-' * 15)

def conta(l, c):
  area = l*c
  print(f"A area de um terreno {l}X{c} é de {area}m²")

titulo()
l = float(input("Lagura (m): "))
c = float(input("Comprimento (m): "))

conta(l, c)
