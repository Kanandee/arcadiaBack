let { Schema, model } = require('mongoose');

const PurchaseSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        user: {
            type: Number,
            required: true,
            unique: true,
        },
        game: {
            type: Number,
            required: true,
            unique: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

const Purchase = model("Purchase", PurchaseSchema);

module.exports = Purchase;