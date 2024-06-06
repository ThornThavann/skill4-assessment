function myFunction() {
  const article = {
    title: "How to code",
    description: "You can learn to code. Error is nothing to be afraid of.",
  }
   document.getElementById("article").innerHTML+=`
    <h1>${article.title}</h1>
    <p>${article.description}</p>
    `
   
  }
  