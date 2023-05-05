import hashlib

string = input("Digite o texto: ")

menu = input(""" """)

resul = hashlib.md5(string.encode('utf-8'))

