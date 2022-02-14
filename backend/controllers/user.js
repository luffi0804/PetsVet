// import user from "../models/user.js";

// const registerUser = async (req, res) => {
//     if (!req.body.name || !req.body.address)
//     return res.status(400).send({message: "Incomplete data"})
// }

// let userSchema = new user({
//     name: req.body.name,
//     address: req.body.address,
//     dbStatus: true
// })

// let result = await userSchema.save();
//     if (!result)
//     return res.status(500).send({message: "Failed to register user"})