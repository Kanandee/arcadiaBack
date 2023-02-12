let Game = require ('../models/Game.js');
const axios = require('axios').default;

const GameController = {};

GameController.getApiGames = async (req, res) => {
   try{

      let listGames = 40;
      let complete;
      let platformsNames=[];
      let genresNames=[];
      let coverURL;

      const apiUrlGame = "https://api.igdb.com/v4/games";
      const apiUrlPlatforms = "https://api.igdb.com/v4/platforms";
      const apiUrlGenres = "https://api.igdb.com/v4/genres";
      const apiUrlCovers = "https://api.igdb.com/v4/covers";
      const config = {
         headers: { 
            'Client-ID': 'cw4f514n7yo54inl1rcx4fgfi22lfc',
            Authorization: 'Bearer 892cbalnivr45ivu0wa6nsel6iubbq',
            Accept: 'application/json'
         }
      };
      const bodyGame = "fields name,summary,cover,genres, platforms, rating; limit "+ listGames +"; sort rating asc; sort release_dates asc;"

      await axios.post(apiUrlGame, bodyGame, config)
             .then(data => complete=data)
             .catch(err => res.status(500).json({
               success: false,
               message: "Error retrieving info",
               error: err.message,
            }))

      for(n in complete.data) {        
         for(p in complete.data[n].platforms){
            await axios.post(apiUrlPlatforms, "fields name; where id ="+complete.data[n].platforms[p]+";", config)
               .then(data => platformsNames.push(data.data[0].name))
               .catch(err => res.status(500).json({
                  success: false,
                  message: "Error retrieving info",
                  error: err.message,
               }))
         }
         complete.data[n].platforms = platformsNames;
         for(g in complete.data[n].genres){
            await axios.post(apiUrlGenres, "fields name; where id ="+complete.data[n].genres[g]+";", config)
               .then(data => genresNames.push(data.data[0].name))
               .catch(err => res.status(500).json({
               success: false,
               message: "Error retrieving info",
               error: err.message,
            }))
         }    
         complete.data[n].genres = genresNames;
         await axios.post(apiUrlCovers, "fields url; where id ="+complete.data[n].cover+";", config)
            .then(data => coverURL = data.data[0].url)
            .catch(err => res.status(500).json({
            success: false,
            message: "Error retrieving info",
            error: err.message,
         }))
         complete.data[n].cover = coverURL;
      }

      res.status(200).json({
         success: true,
         message: "Get all games retrieved successfully",
         results: complete.data,
      })

   }
   catch(err){
      console.error("error", err);
   }

};

GameController.getAll = async (req, res) => {
};

module.exports = GameController;