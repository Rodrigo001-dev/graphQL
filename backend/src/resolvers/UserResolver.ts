import { Query, Resolver } from 'type-graphql';

@Resolver()
export class UserResolver {
  
  private data = [];

  @Query(() => String)
  async hello() {
    return 'Hello World'
  };
};