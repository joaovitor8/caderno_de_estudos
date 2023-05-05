import itertools

string = input("String a ser permutada: ")
result = itertools.permutations(string, 5)

for i in result:
  print(''.join(i))

