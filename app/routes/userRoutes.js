const express = require('express');
const router = express.Router();
const userController = require('../controllers/userContoller');
const { authenticateRole } = require('../utils/auth');

router.get('/', authenticateRole(['Super Admin']), userController.getAllUsers);
router.get('/:id', authenticateRole(['Super Admin', 'Admin']), userController.getUserById);
router.post('/', authenticateRole(['Super Admin', 'Admin']), userController.createUser);
router.put('/change-role/:id', authenticateRole(['Super Admin']), userController.updateUserRole);
router.put('/change-status/:id', authenticateRole(['Super Admin', 'Admin']), userController.updateUserStatus);

module.exports = router;
