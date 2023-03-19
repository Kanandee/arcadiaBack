let Game = require('../models/Game.js');
const axios = require('axios').default;

const GameController = {};

GameController.getAll = async (req, res) => {
   try {
      const games = await Game.find();
      return res.status(200).json({
         success: true,
         message: "Get all games retrieved succsessfully",
         results: games,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving games",
         error: error.message,
      });
   }
};

GameController.getById = async (req, res) => {
   try {
      const id = req.params.id;
      const game = await Game.findOne({ id: id });

      if (game) {
         return res.status(200).json({
            success: true,
            message: "Get game details retrieved succsessfully",
            results: game,
         });
      } else {
         return res.status(404).json({
            success: false,
            message: `Cannot find game with id=${id}`,
         });
      }
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving game",
         error: error.message,
      });
   }
}

GameController.getByName = async (req, res) => {
   try {
      const name = req.params.name;
      const game = await Game.findOne({ name: name });

      if (game) {
         return res.status(200).json({
            success: true,
            message: "Get game details retrieved succsessfully",
            results: game,
         });
      } else {
         return res.status(404).json({
            success: false,
            message: `Cannot find game with name=${name}`,
         });
      }
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving game",
         error: error.message,
      });
   }
}

GameController.getByPlatform = async (req, res) => {
   try {
      const platform = req.params.platform;
      const game = await Game.findOne({ platform : platform });

      if (game) {
         return res.status(200).json({
            success: true,
            message: "Get game details retrieved succsessfully",
            results: game,
         });
      } else {
         return res.status(404).json({
            success: false,
            message: `Cannot find game with platform =${platform}`,
         });
      }
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving game",
         error: error.message,
      });
   }
}

module.exports = GameController;