import numpy as np

## Gerar dados

#NDArray 2x3 (2 listas 3 elementos)
dados = np.random.randn(2, 3)
print(dados)

# Tipo do Array
print(dados.dtype)

# Tamanho e quantidade de dimensões
print(dados.shape)
print(dados.ndim)


## Criar ndarray usando a função array

# Ao criar o array a função array tenta ultilizar o melhor tipo de dado
lista = [1, 45, 3.5, 2.48]
dados2 = np.array(lista)
print(dados2)

lista2 = [[1,2,3,4],[4,3,2,1]]
dados3 = np.array(lista2)
print(dados3)

# Outras maneiras de criar arrays
dadoszero = np.zeros(10)
print(dadoszero)

dadoszero2 = np.zeros((5, 4))
print(dadoszero2)

dadosum = np.ones(5)
print(dadosum)

dadosum2 = np.ones((5, 4))
print(dadosum2)

dadosseq = np.arange(10)
print(dadosseq)

dadosseq2 = np.arange(0,20,2)
print(dadosseq2)

dadosseqf = dadosseq.astype(np.float64)
print(dadosseqf)


# Aritmetica com Arrays

dados4 = np.array([[1,2,3], [4,5,6]])
print(dados4)

print(dados4*dados4)
print(dados4-dados4)
print(1/dados4)

dados5 = dados4+dados4
print(dados5)

print(dados5>dados4)

# Indexação

print(dadosseq[5])

print(dadosseq[3:6])

dadosseq[3:6] = 20
print(dadosseq)

fatiadados = dadosseq[2:4]
print(fatiadados)

fatiadados[1] = 2000
print(fatiadados)

fatiadados[:] = 666
print(dadosseq)


# Copiar dados

fatia2 = dadosseq[2:4].copy()
print(fatia2)

fatia2[:] = 111
print(fatia2)


# Array com mais de uma dimenção

dados6 = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(dados6)

print(dados6[1,2])


# Mascasras

mascara = (dadosseq < 100)
print(mascara)

dadosseq[dadosseq < 20 ] = 8888
print(dadosseq)


# Transposição

dados7 = np.arange(15).reshape((3,5))
print(dados7)
print(dados7.T)


# Multiplicação de Matrizes com Dots

print(np.dot(dados7.T, dados7))


