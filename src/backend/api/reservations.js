import express from "express";
const router = express.Router();
import knex from "../database.js";


router.get("/", async (req,res) => {
    try{
        const reservations = await knex("Reservation")    
        .select();
        res.json(reservations);
    }catch(error){
        console.error(error);
        res.status(500).send("Something went wrong");
    }
    });


router.post("/", async (req, res) => {
    try {
      const newReservation = req.body;
      const reservations = await knex("Reservation")
      .insert(newReservation);
      res.status(201).json(reservations);
    } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  });

  router.get("/:id", async(req,res)=>{
  try{
    const reservationlId = req.params.id
    const reservations = await knex("Reservation")
    .where("id","=", reservationlId)
    .select();
  

    if(reservations.length === 0){
      res.status(404).send("Reservation not found");
      return
    }
    res.json({ reservations });

  }catch(error){
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

router.put("/:id", async(req,res)=>{
    try{
      const reservationlId = req.params.id
      const updateReservation = req.body
      const reservations = await knex("Reservation")
      .where("id","=", reservationlId)
      .update(updateReservation);
      if(reservations === 0){
        res.status(404).send("Reservation not found");
        return
      }
      res.status(200).json({ reservations });
  
    }catch(error){
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  });

  router.delete("/:id", async(req,res)=>{
    try{
      const reservationId = req.params.id
      const reservations = await knex("Reservation")
      .where("id","=", reservationId)
      .del();
      if(reservations === 0){
        res.status(404).send("Reservation not found");
        return
      }
      res.status(200).json({ reservations });
  
    }catch(error){
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  
  });

  export default router;