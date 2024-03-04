import pandas as pd
import numpy as np

# Series
s1 = pd.Series([1,2,-5,0])
print(s1)
print(s1.values)
print(s1.index)

s2 = pd.Series([1,2,-5,0], index=["a", "b", "c", "d"])
print(s2)
print(s2.index)
s2["a"] = 1000
print(s2)

# Comparação
print(s2[s2>0])

# Algebra
print(s2 * 2)
print(s2.isnull())

# Dataframe
dados = {
  'estado': ['SP','MG','PR','SP','MG','PR'],
  'ano': [2019,2019,2019,2020,2020,2020],
  'pop': [45.9,21.2,16.9,46.6,21.4,17.3]
}

df1 = pd.DataFrame(dados)
print(df1)
print(df1.head(2))

# Visualizar partes Dataframe
print(df1.tail(2))
print(df1.sample(2))

# Novo DF a partir do anterior
df2 = pd.DataFrame(dados, columns=["ano", 'estado', 'pop'])
print(df2)

# Observar DF
print(df2["estado"])
print(df2.ano)
print(df2.dtypes)


# Atribuir valor
df2['estimativa'] = 50
print(df2)

df2['estimativa'] = np.arange(6)
print(df2)

df3 = df2['ano']
print(df3)

df2["Não Parana"] = df2.estado != 'PR'
print(df2)

# Excluir Coluna
del df2['Não Parana']
print(df2)

# Entender o DataFrame
print(df2.shape)
print(df2.shape[0])
print(df2.index)
print(df2.columns)
print(df2.count())

# Alterar informação das Colunas
df2.columns = ['Ano', 'Estado', 'População', 'Estimativa']
print(df2)

# Analisar o Dataframe
print(df2.describe(include = 'all'))

# Alterar valores e consultar dados
df2['Ano'] = df2['Ano'] + 2
print(df2)

df4 = df2[df2["Ano"] > 2021]
print(df4)


# Excluir Colunas
print(df4.drop('Ano', axis='columns'))
print(df4.drop('Ano', axis='columns', inplace=True))

# Excluir Linhas
print(df2.drop([0,2]))