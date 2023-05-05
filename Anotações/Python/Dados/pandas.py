#pip install pandas
import pandas as pd

#Ler planilha do Excel
dataFrame1 = pd.read_excel('nome.xlsx')
dataFrame2 = pd.read_excel('nome.xlsx')

#Juntando arquivos
df = pd.concat(dataFrame1, dataFrame2, ...)

#Substituindo linhas com valores nulas
df['linha'].fillna(0, inplace=True)

#Crinado novos colunas
df['novaColuna']

#Retornando maior / menor
df[''].max()
df[''].min()

#Transformando coluna de data(que não esta em data) em data
df['UmaColunaDeTempo'] = pd.to_datetime(df["UmaColunaDeTempo"])

