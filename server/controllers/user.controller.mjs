import { db } from "../models/index.mjs";
const User = db.users;

export const findAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while retrieving users."
            });
        });
};