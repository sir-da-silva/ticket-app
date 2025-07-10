fetch("http://localhost:4000/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
      mutation ($input: CreateUserInput!) {
        createUser(input: $input) {
          token
          user {
            email
            name
          }
        }
      }
    `,
    variables: {
      input: { name: "Test", email: "me@gmail.com", password: "123" },
    },
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Résultat :", data))
  .catch((err) => console.error("Erreur :", err));
