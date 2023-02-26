let Role = require('../models/Role.js');
const axios = require('axios').default;

const RoleController = {};

RoleController.createRole = async (req, res) => {
    try {
       const { name } = req.body;
       const role = await Role.create({ permission: name });
       return res.status(200).json({
          success: true,
          message: "Create role successfully",
          results: role,
       });
    } catch (error) {
       return res.status(500).json({
          success: false,
          message: "Error creating role",
          error: error.message,
       });
    }
 };

 RoleController.getAll = async (req, res) => {
    try {
       const roles = await Role.find();
       return res.status(200).json({
          success: true,
          message: "Get all roles retrieved successfully",
          results: roles,
       });
    } catch (error) {
       return res.status(500).json({
          success: false,
          message: "Error retrieving roles",
          error: error.message,
       });
    }
 };
 

 module.exports = RoleController;