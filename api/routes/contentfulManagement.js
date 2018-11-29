const express = require('express')
const router = express.Router()

const UserController = require('../controllers/authorization/user.js')

const AssetsController = require('../controllers/assets/assets.js')

const HomepageMainController = require('../controllers/homepage/main.js')
const HomepageHeroBasicController = require('../controllers/homepage/hero/basic.js')
const HomepageHeroMediaController = require('../controllers/homepage/hero/media.js')
const HomepageHeroButtonController = require('../controllers/homepage/hero/button.js')

/* AUTHORIZATION USER */
router.get('/user', UserController.getUser)

/* ASSETS */
router.post('/assets', AssetsController.createAsset)

/* HOMEPAGE */
router.get('/homepage/main', HomepageMainController.fetchData)
router.put('/homepage/main', HomepageMainController.updateData)

router.get('/homepage/hero/basic', HomepageHeroBasicController.fetchData)
router.put('/homepage/hero/basic', HomepageHeroBasicController.updateData)
router.get('/homepage/hero/media', HomepageHeroMediaController.fetchData)
router.get('/homepage/hero/button', HomepageHeroButtonController.fetchData)


module.exports = router
