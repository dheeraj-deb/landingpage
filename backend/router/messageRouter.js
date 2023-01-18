const router = require('express').Router();
const { Message } = require('../model/MessageModel')


router.post('/save-message', async (req, res, next) => {

    console.group(req.body)
    try {
        const response = await Message.create(req.body.data)
        if (response) return res.status(200).json({ status: 1, message: "success", response })
        else return res.status(400).json({ status: 0 })
    } catch (error) {
        if (error.name === "ValidationError") {
            let errors = {};

            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });

            return res.status(400).send(errors);
        }
        console.log(error)
        res.status(400)
        throw new Error(error)
    }
})

module.exports = router