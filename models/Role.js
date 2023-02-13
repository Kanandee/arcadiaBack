let { Schema, model } = require('mongoose');

const RoleSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        permission: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

const Role = model("Role", RoleSchema);

module.exports = Role;