let { Schema, model } = require('mongoose');

const UserSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         match: /.+\@.+\..+/,
      },
      password: {
         type: String,
         required: true,
         minlength: 6,
      },
      role: {
         type: String,
         required: true,
         enum: ["user", "admin"],
         default: "user",
      },
      games: {
         type: Array,
         default: []
      },
      paycard: {
        type: Number,
        required: true,
     }
   },
   {
      timestamps: false,
      versionKey: false,
   }
);

const User = model("User", UserSchema);

module.exports = User;
