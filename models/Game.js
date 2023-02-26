let { Schema, model } = require('mongoose');

const GameSchema = new Schema(
   {
      id: {
         type: Number,
         required: true,
         unique: true,
      },
      name: {
         type: String,
         required: true,
      },
      summary: {
         type: String,
         required: true,
      },
      cover: {
         type: String,
         required: true,
      },
      genres: {
         type: Array,
         required: true,
         default: []
      },
      platforms: {
         type: Array,
         required: true,
         default: []
      },
      rating: {
         type: Number,
         required: true,
      },
      user_id: {
         type: Schema.ObjectId,
         ref: "user"
      },
   },
   {
      timestamps: false,
      versionKey: false,
   }
);

const Game = model("Game", GameSchema);

module.exports = Game;