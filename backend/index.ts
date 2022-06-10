import "reflect-metadata";

import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

async function main() {
  const schema = await buildSchema({
    /*
      resolvers é como se fosse os controllers. Como no GraphQL temos uma rota
      somente, quem lida com a diferenciação de qual informação eu quero buscar
      do backend são os resolvers, ou seja, os resolvers é como se fosse as
      nossas "rotas" 
    */
    resolvers: [],
    // o emitSchemaFile é para indicar aonde eu quero salvar o arquivo de schema
    // do GraphQL 
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
};

main();