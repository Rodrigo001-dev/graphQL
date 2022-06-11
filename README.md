## :page_with_curl: Projeto

<LINKEDIN>
Aprendendo os fundamentos do GraphQL do Backend ao Frontend!
</LINKEDIN>


<LINKEDIN>
Mas o que é GraphQL?

GraphQl é uma ferramenta que foi criada dentro do facebook, a tradução vem de Query Language o QL no final, ou seja, linguagem para realização de queries(assim como SQL por exemplo que também é uma query language), é uma forma de escrever operações de escrita ou leitura, e Graph vem de grafos(um Grafo é uma estrutura de dados formada por um conjunto de não vazio de vértices e por um conjunto de arestas, ligando estes vértices.).

Mas para que o GraphQL serve?

Ele básicamente serve para realizar operações de escrita e leitura através da comunicação do Front com o Back , da mesma forma que utilizamos o padrão RESTfull para fazer chamadas API onde temos métodos GET, POST, PUT, DELETE. O GraphQL assim como o padrão RESTfull é uma forma de comunicar o Frontend com o Backend.
</LINKEDIN>

O GraphQL é totalmente independente da tecnologia que é utilizada no backend ou do frontend, do banco de dados, ou seja, para o GraphQL não importa nada disso, ele não funciona especificamente em uma linguagem, em uma tecnologia. O GraphQL é um conjunto de padrões para comunicar o Frontend com o Backend de uma maneira diferente da maneira convencional quando é feito chamadas API utilizando o padrão RESTfull.

- Quais problemas o GraphQL resolve?
  - Overfetching(buscar informações demais)
    - http://localhost:3000/users
      - DB (usuários, endereços)
    - Se em algum momento eu precisar fazer uma listagem de usuários sem o endereço, eu faço uma chamada para a rota de users só que a rota vai me retornar os endereços, só que eu não preciso deles, ou seja, ela tá com Overfetching, eu estou buscando mais do que eu preciso do backend.

  - Underfetching(buscar informações de menos)
    - http://localhost:3000/users
      - DB (usuários)
    - http://localhost:3000/addresses
    - Se em agum momento no Frontend que tem uma página que precisa tanto de usuários quanto de endereços desses usuários, se a rota de usuários não retornou todos os dados que eu precisava, isso foi um Underfetching, eu fiz uam chamada para o backend e não me devolveu todos os dados que eu precisava.

Quando fazemos uma chamada para o backend utilizando padrão REST, é feita uma chamada para a rota users por exemplo e essa rota determina quais dados vão ser retornados, ou seja, o backend tem toda a responsabilidade por dizer para o frontend exatamente quais são os dados que vão ser retornados.

Quando utilizamos o GraphQL quem diz quais dados são necessários do backend é o front não o back, o backend vai falar simplesmente para o front: eu tenho toda essa vastidão de dados aqui disponíveis, usuários, endereços, o que você quer? Ou seja, em uma chamada HTTP eu consigo buscar todos os dados que eu preciso do backend.

- Dificuldades:
  - Trabalhar com cache é muito mais difícil no GraphQL do que com o REST, porque com REST os próprios browsers já estão padronizados para fazer o cache das requisições.

  - Errors: os erros que o backend retorna é mais difícil de tratar esses erros, fazer a manipulação desses erros com GraphQL. Todas as chamadas HTTP sempre retornam código 200, ou seja, é um código de "sucesso" para o browser.

Dentro do GraphQL existe o schema first e o code first.

O Schema first é escrito o schema antes e depois o código é escrito.
No code first o código é escrito primeiro e ele mesmo se encarrega de criar o schema.
      
