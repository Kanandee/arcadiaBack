let User = require('../models/User.js');
let jwt = require('jsonwebtoken');
let { hashSync, compareSync } = require('bcrypt');

const UserController = {};

UserController.getAll = async (req, res) => {
   try {
      const users = await User.find();

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved successfully",
         results: users,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

UserController.deleteUser = async (req, res) => {
   try {
      const user = await User.deleteOne({ _id: req.params.id });

      return res.status(200).json({
         success: true,
         message: "Delete successfully",
         results: user,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error delete users",
         error: error.message,
      });
   }
};

UserController.updateUser = async (req, res) => {
   try {
      const { name, password } = req.body;
      const encryptedPassword = hashSync(password, 10);
      const user = await User.updateOne(
         {
            _id: req.params.id
         },
         {
            name: name,
            password: encryptedPassword,
         }
      );

      return res.status(200).json({
         success: true,
         message: "Update successfully",
         results: user,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error update users",
         error: error.message,
      });
   }
};

UserController.getInfo = async (req, res) => {
   try {
      const user = await User.findOne({ _id: req.params.id });
      console.log(user)
      return res.status(200).json({
         success: true,
         message: "Get user info retrieved successfully",
         results: user,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

UserController.buyGame = async (req, res) => {
   try {
      let bearer = req.headers.authorization;
      let token = bearer.replace('Bearer ', '');
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      let userId = decoded.user_id
      const userfind = await User.findOne({ _id: userId });
      const index = userfind.games.indexOf(req.params.gameId);
      if (index < 0) {
         await User.updateOne(
            { _id: userId },
            { $push: { games: req.params.gameId } }
         );
      }
      const userupdate = await User.findOne({ _id: userId });
      return res.status(200).json({
         success: true,
         message: "Game purchased",
         results: userupdate,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error purchasing game",
         error: error.message,
      });
   }
};

UserController.removeGame = async (req, res) => {
   try {
      let bearer = req.headers.authorization;
      let token = bearer.replace('Bearer ', '');
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      let userId = decoded.user_id
      const user = await User.findOne({ _id: userId });
      const index = user.games.indexOf(req.params.gameId);
      user.games.splice(index, 1)
      const userUpdated = await User.updateOne(
         { _id: userId },
         { games: user.games }
      );
      return res.status(200).json({
         success: true,
         message: "Game removed from user",
         results: userUpdated,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error removing game from user",
         error: error.message,
      });
   }
};

module.exports = UserController;
