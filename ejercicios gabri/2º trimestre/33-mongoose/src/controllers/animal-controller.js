import Animal from "../models/Animal.js";

export async function createAnimal(req, res, next){
  try{
    const animal = new Animal(req.body);
    const createdAnimal= await animal.save();
    return createdAnimal;
  }catch(error){
    next(error);
  }
}
