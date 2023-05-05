from bs4 import BeautifulSoup
import requests

site = requests.get("https://www.climatempo.com.br/").content #objeto site recebendo o conteudo da requisição http do site
soup = BeautifulSoup(site, 'html.parse') #objeto soup baixando do site o html

print(soup.prettify()) #transforma gtml em string e o print vai exibir o html
