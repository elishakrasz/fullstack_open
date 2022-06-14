const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(express.json())
// app.use(express.static('build'))

app.use(cors)
morgan.token('type', function (req, res) { return req.headers['content-type'] })
app.use(morgan(`:method :url :status :res[content-length] - :response-time ms`))

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    },
    { 
      "id": 5,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
  app.get('/', (req, res) => {
      res.send('<h1>Hello World</h1>')
  })


  app.get('/api/info', (req, res) => {
      let date = new Date()
      let number = persons.length
      res.send(`<h1>Phonebook has info for ${number} people</h1><h2> ${date}</h2>`)
      
  })

  app.get('/api/persons', (req, res) => {
      res.json(persons)
  })

  app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
    
  })

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
  }

  app.post('/api/persons', (req, res) => {

      const body = req.body
      if(!body.content) {
          return res.status(400).json({
              error: 'content missing'
          })
      }

      const isFound = persons.some((persons) => {
        if (persons.name === body.content.name) return true;
      });

      if(isFound) {
          return res.status(400).json({
              error: 'name must be unique'
          })
      }
      if(body.content.name === '' || body.content.number === null) {
          return res.status(400).json({
            error: 'name or number is missing'
        })
      }
      const person = {
          content: body.content,
          important: body.important || false,
          date: new Date(),
          id: generateId()
      }
      persons = persons.concat(person)
      res.json(person)
  })

  app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
  
    res.status(204).end()
  })

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })