import re
import json
from urllib.request import urlopen

url = ''

resp = urlopen(url)
dados = json.load(resp)

ip = dados['ip']
org = dados['org']
pais = dados['country']

print(ip, org, pais)

