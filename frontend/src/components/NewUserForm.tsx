import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";

import { GET_USER } from "../App";
import { client } from "../lib/apollo";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

export function NewUserForm() {
  const [name, setName] = useState('');
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  
  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if (!name) {
      return;
    };

    await createUser({
      variables: {
        name
      },
      // refetchQueries: [GET_USER]
      update: (cache, { data: { createUser } }) => {
        // eu quero buscar todos os úsuarios que foram retornados pela query
        // GET_USER
        const { users } = client.readQuery({ query: GET_USER });

        // e vou atualizar o cache com o retorno da query
        cache.writeQuery({
          query: GET_USER,
          // trocando o valor do data
          data: {
            users: [
              // contendo todos os usuários que eu já tenho no cache
              ...users,
              // adicionando o novo usuário
              createUser,
            ]
          }
        });
      },
    });
  };
  
  return (
    <form onSubmit={handleCreateUser}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
};