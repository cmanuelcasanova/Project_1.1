const listU1 = document.querySelector('#List1')
const listU2 = document.querySelector('#List2')

const url1 = 'https://jsonplaceholder.typicode.com/users'
const url2 = 'https://pokeapi.co/api/v2/pokemon'



fetch(url1)
      .then(response => response.json())
      .then(data => {
        
        data.forEach(element => {
            const li = document.createElement("li")
            li.textContent = element.name
            listU1.append(li)
        });
      } 
    )

fetch(url2)
    .then(response => response.json())
    .then(data => {
      
      data.results.forEach(element => {
          const li = document.createElement("li")
          li.textContent = element.name
          listU2.append(li)
      });
    } 
  )


