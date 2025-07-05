fetch("http://localhost:4000/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    query: `
      query {
        events {
          id
          title
          date
          location
        }
      }
    `
  })
})
  .then(res => res.json())
  .then(data => console.log("Résultat :", data.data.events))
  .catch(err => console.error("Erreur :", err));
