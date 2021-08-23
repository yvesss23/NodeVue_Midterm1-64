const {Mouse} = require("../model");
const mouse = require("../model/mouse");
const mouse = require("../model/mouse");
const mouse = require("../model/mouse");

module.exports = {
    //get all user
    async index(req,res){
        //res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด');
        try{
            const mouses = await Mouse.findAll();
            res.send(mouses);
        }
        catch(err){
            res.status(500).send({
                error: 'The users information was incorrect'
            });
        }
    },
    async show(req,res){
        try{
            const mouse = await mouse.findByPk(req.params.mouseId);
            res.send(mouse);
        }
        catch(err){
            res.status(500).send({
                error: 'The users information was incorrect'
            });
        }
    },
    async create(req,res){
        try{
            const mouse = await mouse.create(req.body)
            res.send(mouse.toJSON())
        } catch(err){
            res.status(500).send({
                error: 'Create user incorrect'
            })
        }
    },
    async put(req,res){
        try{
            await mouse.update(req.body,{
                where: {
                    id: req.params.mouseId
                }
            })
            res.send(req.body)
        } catch(err){
            res.status(500).send({
                error: 'Update user incorrect'
            })
        }
    },
    async remove(req,res){
        try{
            const mouse = await mouse.findOne({
                where: {
                    id: req.params.mouseId
                }
            })
            if(!mouse){
                return res.status(403).send({
                    error: 'The user information was incorrect'
                })
            }
            await mouse.destroy()
            res.send(mouse)
        } catch(err){
            res.status(500).send({
                error: 'Remove user incorrect'
            })
        }
    }
}
