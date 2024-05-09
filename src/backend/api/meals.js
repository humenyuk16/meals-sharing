import express from "express";
const router = express.Router();
import knex from "../database.js";

router.get("/", async (req, res) => {
  try {
    const {
      maxPrice,
      availableReservations,
      title,
      dateAfter,
      dateBefore,
      limit,
      sortKey,
      sortDir
    } = req.query;

    const query = knex("meal")
      .select([
        "meal.id",
        "meal.title",
        "meal.max_reservations",
        "meal.price",
        "meal.when",
        "meal.description",
        "meal.location",
        "meal.image_url",
      ])
      .countDistinct("reservation.id as total_reservations")
      .leftJoin("reservation", "meal.id", "=", "reservation.meal_id")
      .groupBy("meal.id", "meal.title", "meal.max_reservations", "meal.price", "meal.when", "meal.description", "meal.location", "meal.image_url");

    


    if (maxPrice !== undefined) {
      // Convert maxPrice to a float
      const price = parseFloat(maxPrice);

      if (!isNaN(price) && price >= 0) {
        query.where("meal.price", "<=", price);
      } else {

       res.status(400).send("Invalid maxPrice");
       return

      }
    }

    if (availableReservations === 'true') {
      query.having("total_reservations", "<", knex.raw("meal.max_reservations"));
    } else if (availableReservations === 'false') {
      query.having("total_reservations", ">=", knex.raw("meal.max_reservations"));
    }

    if (title !== undefined) {
      query.where("meal.title", "like", `%${title}%`);
    }

    if (dateAfter !== undefined) {
      query.where("meal.when", ">", dateAfter);
    }

    if (dateBefore !== undefined) {
      query.where("meal.when", "<", dateBefore);
    }


    if (limit !== undefined && parseInt(limit, 10) > 0) {
      query.limit(parseInt(limit, 10));
    }    


    if (sortKey !== undefined) {
      const direction = sortDir === 'desc' ? 'desc' : 'asc';
      query.orderBy(`meal.${sortKey}`, direction);
    }

    const result = await query;

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});



router.get("/all", async (req,res) => {

try{
    const meals = await knex("meal")    
    .select();
    res.json(meals);
}catch(error){
    console.error(error);
    res.status(500).send("Something went wrong");
}
});



router.post("/", async (req, res) => {
  try {
    const newMeal = req.body;
    const meal = await knex("meal")
    .insert(newMeal);
    res.status(201).json(meal);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});


router.get("/:id", async(req,res)=>{
  try{
    const mealId = req.params.id
    const meal = await knex("meal")
    .where("id","=", mealId)
    .select();
  

    if(meal.length === 0){
      res.status(404).send("Meal not found");
      return
    }
    res.json({ meal });

  }catch(error){
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

router.put("/:id", async(req,res)=>{
  try{
    const mealId = req.params.id
    const updatedMeal = req.body
    const meal = await knex("meal")
    .where("id","=", mealId)
    .update(updatedMeal);
    if(meal === 0){
      res.status(404).send("Meal not found");
      return
    }
    res.status(200).json({ meal });

  }catch(error){
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});


router.delete("/:id", async(req,res)=>{
  try{
    const mealId = req.params.id
    const meal = await knex("meal")
    .where("id","=", mealId)
    .del();
    if(meal === 0){
      res.status(404).send("Meal not found");
      return
    }
    res.status(200).json({ meal });

  }catch(error){
    console.error(error);
    res.status(500).send("Something went wrong");
  }

});

router.get("/:meal_id/reviews", async (req, res) => {
  try {
      const { meal_id } = req.params;

      const reviews = await knex("review")
          .where({ meal_id })
          .select();

      res.status(200).json(reviews);
  } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong");
  }
}); 

export default router;
