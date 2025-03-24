const form = document.getElementById('form')
const input = document.getElementById('input')






const url = 'https://jsonplaceholder.typicode.com/users'



fetch(url)
      .then(response => response.json())
      .then(data => {
        
        data.forEach(element => {
            console.log(element.name)
        });
    

      }
    
    
    )

     
