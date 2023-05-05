from threading import Thread
import time

def carro(velocidade, piloto):
  trajeto = 0
  while trajeto <= 100:
    
    trajeto+=velocidade
    time.sleep(0.5)
    print(f'Piloto: {piloto} Km: {trajeto}')


t_carro1 = Thread(target=carro, args=[1, 'bruno'])
t_carro2 = Thread(target=carro, args=[2, 'Joao'])

t_carro1.start()
t_carro2.start()