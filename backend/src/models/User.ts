import { Length } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  // para cada campo eu vou colocar um decorator Field()
  @Field(_type => ID)
  id: string;

  @Field()
  @Length(10, 50) // validando para ter entre 10 a 50 caracteres se não estiver entre 10 a 50 vai dar erro
  name: string;
};