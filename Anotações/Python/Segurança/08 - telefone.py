import phonenumbers
from phonenumbers import geocoder

tel = input("Digite um telefone: ")
phone = phonenumbers.parse(tel)

print(geocoder.description_for_number(phone, 'pt'))
