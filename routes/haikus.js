var
  express = require('express'),
  haikuRouter = express.Router(),
  haikusController = require('../controllers/haikus.js')

haikuRouter.get('/', haikusController.index)
haikuRouter.post('/', haikusController.create)

haikuRouter.get("/new", haikusController.new)
haikuRouter.get("/:id/edit",haikusController.edit)

haikuRouter.get('/:id', haikusController.show)
haikuRouter.post('/:id', haikusController.update)
haikuRouter.delete('/:id', haikusController.destroy)

module.exports = haikuRouter
