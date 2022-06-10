import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  // para cada campo eu vou colocar um decorator Field()
  @Field(_type => ID)
  id: string;

  @Field()
  name: string;
};