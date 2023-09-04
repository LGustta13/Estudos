# Dicionário
tabela = {"Alface":0.45,"Batata":1.20,"Tomate":2.30,"Feijão":1.50}
print(tabela)               # printa os dados da tabela
print(tabela["Tomate"])     # print do valor da chave "Tomate"
print("Manga" in tabela)    # Ver se a palavra Manga faz parte da tabela(sai True ou False)
print(tabela.keys())        # print das chaves
print(tabela.values())      # print dos valores das chaves
del tabela["Tomate"]        # deleta a chave em colchetes
