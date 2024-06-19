
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const ADMIN_ROLE = 1;

router.put('/:id/role', authMiddleware, roleMiddleware(ADMIN_ROLE), userController.changeUserRole);

module.exports = router;
