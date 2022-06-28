# League of MatchUp

**Número da Lista**: Não se aplica<br>
**Conteúdo da Disciplina**: Grafos 1<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 19/0124997  |  Amanda Jeniffer Pereira Nobre |
| 15/0129866  |  Igor Araujo de Sousa |

## Sobre 
Este projeto tem como objetivo ser útil aos jogadores de League of Legends, dando informações sobre as match ups entre os campeões do jogo. 

## Screenshots
Tela de escolha:
![image](https://user-images.githubusercontent.com/44625056/176065055-9f6fe4f4-f466-417e-8bb9-ac1a23255973.png)

Tela de resultado:
![image](https://user-images.githubusercontent.com/44625056/176064994-106e734f-dc71-4f92-ab09-86f84dd91528.png)

## Instalação 
**Linguagem**: Foram utilizadas 2 linguagens nesse projeto, javascript e Python. Para facilitar a execução do projeto por parte dos professores e alunos adicionamos um docker-compose para a instalação das linguagens e execução<br>
**Framework**:<br>
Utilizamos o flask como backend para receber as requisições feitas e para aplicar os algorítmos relacionado a lista de Adjacência.
Utilizamos o Node.js para fazer o scrapping dos dados dentro do site que possui as métricas relacionadas aos matchUps.
Utilizamos o Next.js para fazer o frontend responsável por mostrar a visualização dos dados resultantes do backend.

## Uso 
Tudo que é necessário para executar esse projeto é ter em sua máquina instalado o [docker](https://docs.docker.com/engine/install/ubuntu/) e o [docker-compose](https://docs.docker.com/compose/install/)

Após a intalação de ambos é necessário executar o seguinte comando na raiz desse projeto:
```
docker-compose up

```
- Agora basta acessar o link abaixo que você será rederionado para o nosso projeto no seu browser no localhost:3000




