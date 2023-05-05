import ctypes

atributos = 0x02

retorno = ctypes.windll.kernel32.SetFileAttributesW('ocultar.txt', atributos)

if retorno:
  print('Ocultado')
else:
  print('Não oculto')