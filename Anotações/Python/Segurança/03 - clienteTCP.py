import socket
import sys

def main():
  try:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0)
  except socket.error as e:
    print(f"Erro: {e}")
    sys.exit()

  print("Socket criado com sucesso")

  HostAlvo = input("Digite o host ou op: ")
  PortaAlvo = input("Digite a porta: ")

  try:
    s.connect((HostAlvo, int(PortaAlvo)))
    print("Cliente TCP conectado")
    s.shutdown(5)
  except socket.error as e:
    print(f"Erro: {e}")
    sys.exit()

if __name__ == "__main__":
  main()