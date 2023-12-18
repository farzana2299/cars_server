const users = require("../model/userModel")
const categorys=require('../model/categoryModel')

exports.register = async (req, res) => {
    const { name,phone,userName, email, password } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(400).json("User Allready exist")
        } else {
            const newUser = new users({
                name,phone,userName, email, password
            })
            await newUser.save()
            res.status(200).json(`${name} registread sussussfully`)
        }
    } catch (error) {


        res.status(404).json("Register api is not working")

    }
}

//login

exports.login = async (req, res) => {
    const { userName, password } = req.body
    try {
        const currentUser = await users.findOne({ userName, password })
        if (currentUser) {
            res.status(200).json("Login Successfull")
        }
        else {
            res.status(404).json("incorrect username or password")
        }


    } catch (err) {
        res.status(401).json("Login api is not working")


    }

}
exports.category = async (req, res) => {
    const { name } = req.body
    try {
        const existingCategory = await users.findOne({  })
        if (existingCategory) {
            res.status(400).json("Category Allready exist")
        } else {
            const newCategory = new categorys({
                name
            })
            await newCategory.save()
            res.status(200).json(`${name} added sussussfully`)
        }
    } catch (error) {


        res.status(404).json("category api is not working")

    }
}