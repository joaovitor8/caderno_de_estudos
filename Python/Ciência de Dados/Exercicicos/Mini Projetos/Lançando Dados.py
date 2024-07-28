import random

while True:
  dado = random.randint(1, 6)
  letra = input("Pressione G para girar o dado, ou S para sair do programa!").upper()

  if letra == "G":
    if dado == 1:
      print("===========")
      print("|         |")
      print("|    0    |")
      print("|         |")
      print("===========")
    elif dado == 2:
      print("===========")
      print("|         |")
      print("| 0     0 |")
      print("|         |")
      print("===========")
    elif dado == 3:
      print("===========")
      print("|    0    |")
      print("|    0    |")
      print("|    0    |")
      print("===========")
    elif dado == 4:
      print("===========")
      print("| 0     0 |")
      print("|         |")
      print("| 0     0 |")
      print("===========")
    elif dado == 5:
      print("===========")
      print("| 0     0 |")
      print("|    0    |")
      print("| 0     0 |")
      print("===========")
    elif dado == 6:
      print("===========")
      print("| 0     0 |")
      print("| 0     0 |")
      print("| 0     0 |")
      print("===========")
  elif letra == "S":
    break
  else:
    print("Por favor pressione apenas G (Girar) e S (Sair) no teclado!")

  print(dado)

