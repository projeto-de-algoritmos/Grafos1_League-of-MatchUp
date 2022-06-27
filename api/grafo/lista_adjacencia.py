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
