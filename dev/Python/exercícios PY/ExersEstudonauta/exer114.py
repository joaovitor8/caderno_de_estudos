import urllib.request

try:
    site = urllib.request.urlopen('http://www.pudim.com.br')
except:
    print('\033[0;31mDeu erro')
else:
    print('\033[0;32mDeu certo\033[m')
finally:
    print('Fim do programa!!!')
