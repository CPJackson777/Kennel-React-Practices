//  PURPOSE: FETCH CALLS TO THE API WILL GO HERE. THIS IS A REGULARE MODULE...NOT REACT

const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then(result => result.json())
  },

  delete(id) {  
    return fetch(`http://localhost:5002/owners/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}


// I could also make a generic API manager that could work with all components like below...

// export default {
//     get(tacoForComponent, id) {
//       return fetch(`${remoteURL}/${tacoForComponent}/${id}`).then(result => result.json())
//     },
//     getAll(tacoForComponent) {
//       return fetch(`${remoteURL}/${tacoForComponent}`).then(result => result.json())
//     }
//   }