const {pirate} = require("../models/pirates.model")

module.exports = {
    findAll: (req, res) => {
        pirate.find()
        .then(allDaPirates => {
            res.json(allDaPirates)
        })
        .catch(err => res.json(err))
        
    },

    create: (req,res) => {
        console.log(req.body)

        pirate.create(req.body)
        .then(newPirate => {
            res.json(newPirate)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    },

    findOne: (req, res) => {
        pirate.findById(req.params.id)
        .then(onePirate => res.json(onePirate))
        .catch(err => res.json(err))
    },

    
    delete: (req, res) => {
        pirate.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }
    
    // update: (req, res) => {
    //     console.log("UPDATE ID:", req.params.id)
    //     console.log("req.body:", req.body)

    //     pirate.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    //     .then(updatedProgram => res.json(updatedProgram))
    //     .catch(err => res.json(err))
    // }

}