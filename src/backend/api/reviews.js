import express from "express";
const router = express.Router();
import knex from "../database.js";

router.get("/", async (req,res) => {
    try{
        const reviews = await knex("review")    
        .select();
        res.json(reviews);
    }catch(error){
        console.error(error);
        res.status(500).send("Something went wrong");
    }
})

router.post("/", async (req, res) => {
  try {
    const newReview = req.body;
    const review = await knex("review")
    .insert(newReview);
    res.status(201).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});


router.get("/:id", async(req,res)=>{
    try{
      const reviewId = req.params.id
      const reviews = await knex("review")
      .where("id","=", reviewId)
      .select();
    
  
      if(reviews.length === 0){
        res.status(404).send("Review not found");
        return
      }
      res.json({ reviews });
  
    }catch(error){
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  });


router.put("/:id", async(req,res)=>{
    try{
      const reviewId = req.params.id
      const updateReview = req.body
      const reviews = await knex("review")
      .where("id","=", reviewId)
      .update(updateReview);
      if(reviews === 0){
        res.status(404).send("Review not found");
        return
      }
      res.status(200).json({ reviews });
  
    }catch(error){
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  });


router.delete("/:id", async(req,res)=>{
    try{
      const reviewId = req.params.id
      const reviews = await knex("review")
      .where("id","=", reviewId)
      .del();
      if(reviews === 0){
        res.status(404).send("Review not found");
        return
      }
      res.status(200).json({ reviews });
  
    }catch(error){
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  });

  router.get("/:id/withMeal", async (req, res) => {
    try {
      const reviewId = req.params.id;
      const reviews = await knex("review")
        .where("id", "=", reviewId)
        .select();
  
      if (reviews.length === 0) {
        res.status(404).send("Review not found");
        return;
      }

      const meal = await knex("meal")
        .where("id", "=", reviews[0].meal_id) 
        .select();
  
      if (meal.length === 0) {
        res.status(404).send("Meal not found");
        return;
      }
      res.json({ review: reviews[0], meal: meal[0] });
  
    } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  });
  

  export default router;