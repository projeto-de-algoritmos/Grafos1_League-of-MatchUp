class Grafo:
    def __init__(self,vertices):
        self.vertices = vertices
        self.grafo = [[] for i in range(self.vertices)]
    
    def adiciona_aresta(self,u,v):
        self.grafo[u].append(v)    
    def mostra_lista(self):
        for i in range(self.vertices):
            print(f'{i}:',end="   ")
            for j in self.grafo[i]:
                print(f'{j} ->',end="   ")
            print("")
    def busca_lista(self,node):
        return self.grafo[node]

import json

with open("Nodes.json", encoding='utf-8') as meu_json:
    nodes = json.load(meu_json)

with open("Edges.json", encoding='utf-8') as meu_json:
    edges = json.load(meu_json)

g = Grafo(len(nodes))
# print(edges)
print(len(edges))
for item in edges:
    g.adiciona_aresta(item["champ"],item["betterThan"])


g.mostra_lista()
# arr_search = g.busca_lista(0)
# arr_result =[]
# for index in arr_search:
#     arr_result.append(edges[index])  

# print(arr_result)

