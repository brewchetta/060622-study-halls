# 03-json-server-and-restful-routing

| Route Name | URL      | HTTP Verb | Description        |
| ---------- | -------- | --------- | ------------------ |
| index      | /ducks   | GET       |  all ducks         |
| show       | /ducks/2 | GET       |  one duck by id    |
| create     | /ducks   | POST      |  create new duck   |
| update     | /ducks/2 | PATCH/PUT |  update duck by id |
| destroy    | /ducks/2 | DELETE    |  delete duck by id |

Example GET request:

```js
fetch('https://localhost:3000/ducks')
.then(res => res.json())
.then(ducks => console.log(ducks))
```

Example POST request:

```js
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({name: 'superduck', img_url: 'someduckimg.jpg'})
}

fetch('https://localhost:3000/ducks', options)
.then(res => res.json())
.then(newDuck => console.log(newDuck))
```

Example PATCH request:

```js
const options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({name: 'ultraduck'})
}

fetch('https://localhost:3000/ducks/1', options)
.then(res => res.json())
.then(editedDuck => console.log(editedDuck))
```

Example DELETE request:

```js
const options = {
  method: 'DELETE'
}

fetch('https://localhost:3000/ducks/1', options)
```
