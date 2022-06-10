import { Query, Resolver } from 'type-graphql';

@Resolver()
export class UserResolver {
  
  @Query()
  async hello() {
    return 'Hello World'
  };
};