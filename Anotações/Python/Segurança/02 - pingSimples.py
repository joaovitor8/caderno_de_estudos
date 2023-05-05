#Importa o mudulo/biblioteca OS ( Integra os programas e recursos do sistema operacional )
import os

#Criando uma variavel que vai receber do usuario um IP
ip_ou_host = input("Digite o IP ou HOST a ser verificado: ")

#Chamando system da biblioteca OS - comando PING -n -num de pacotes que serão 6
os.system(f'ping -n 6 {ip_ou_host}')
