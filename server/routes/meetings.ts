import express from 'express'
// import dbFunctions here

const router = express.Router()

router.get('/', (res, req) => {
  // getFunction
  .then((meeetingsData) => {
    res.json(meeetingsData)
  }).catch((err) => {
    res.status(500).send(err.message)
  })
})

router.post('/', (res, req) => {
  // sendFunction(req.body)
  .then((meeetingsData) => {
    res.json(meeetingsData)
  }).catch((err) => {
    res.status(500).send(err.message)
  })
})


export default router