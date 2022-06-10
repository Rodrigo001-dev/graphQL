import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import crypto from 'crypto';

import { User } from '../models/User';

// no GraphQL temos 2 conceitos
// query: buscar dados
// mutation: criar, alterar ou deletar

@Resolver()
export class UserResolver {
  
  private data: User[] = [];

  // no typescript quando queremos informar que é uma lista de informações os []
  // são colocados no final(User[]), no GraphQL quando queremos retornar uma
  // lista de informações os [] são colocados envolta da classe([User])
  @Query(() => [User])
  async users() {
    // vai retornar todos os usuários
    return this.data;
  };

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string
  ) {
    const user = { id: crypto.randomUUID(), name };

    this.data.push(user);

    return user;
  };
};