// await fetch("http://localhost:4000/graphql", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     query: `
//       mutation ($input: InitSignUpInput!) {
//         initSignUp(input: $input)
//       }
//     `,
//     variables: {
//       input: { name: "Test", email: "me3@gmail.com", password: "12lkjlkj3" },
//     },
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("Résultat :", data))
//   .catch((err) => console.error("Erreur :", err));

setTimeout(() => {
  fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      mutation ($input: UpdateUserInput!) {
        updateUser(input: $input) {
          token
          user {
            id
            email
            name
            isGoogleAuthenticated
            createdAt
          }
        }
      }
    `,
      variables: {
        input: {
          email: "me4@gmail.com",
          password: "12lkjlkj3",
        },
      },
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Résultat :", data))
    .catch((err) => console.error("Erreur :", err));
}, 1000);
