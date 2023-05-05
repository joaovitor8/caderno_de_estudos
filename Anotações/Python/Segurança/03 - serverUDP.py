import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

host = 'localhost'
porta = 5432

s.bind((host, porta))

mensagem = 'Servidor:  Olá'

while 1:
  dados, end = s.recvfrom(4096)

  if dados:
    print("Servidor enviando mensagem")
    s.sendto(dados + mensagem.encode(), end)
  

