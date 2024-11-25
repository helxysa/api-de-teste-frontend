import express from 'express'
import UserController from '../controllers/UserController.js'

const router = express.Router()

router.get('/api/items', UserController.getAll)
router.post('/api/items', UserController.create)
router.put('/api/items/:id', UserController.update)
router.delete('/api/items/:id', UserController.delete)

export { router }