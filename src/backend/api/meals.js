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

    const query = knex("Meal")
      .select([
        "Meal.id",
        "Meal.title",
        "Meal.max_reservations",
        "Meal.price",
        "Meal.when",
        "Meal.description",
        "Meal.location",
        "Meal.image_url",
      ])
      .countDistinct("Reservation.id as total_reservations")
      .leftJoin("Reservation", "Meal.id", "=", "Reservation.Meal_id")
      .groupBy("Meal.id", "Meal.title", "Meal.max_reservations", "Meal.price", "Meal.when", "Meal.description", "Meal.location", "Meal.image_url");

    


    if (maxPrice !== undefined) {
      // Convert maxPrice to a float
      const price = parseFloat(maxPrice);

      if (!isNaN(price) && price >= 0) {
        query.where("Meal.price", "<=", price);
      } else {

       res.status(400).send("Invalid maxPrice");
       return

      }
    }

    if (availableReservations === 'true') {
      query.having("total_reservations", "<", knex.raw("Meal.max_reservations"));
    } else if (availableReservations === 'false') {
      query.having("total_reservations", ">=", knex.raw("Meal.max_reservations"));
    }

    if (title !== undefined) {
      query.where("Meal.title", "like", `%${title}%`);
    }

    if (dateAfter !== undefined) {
      query.where("Meal.when", ">", dateAfter);
    }

    if (dateBefore !== undefined) {
      query.where("Meal.when", "<", dateBefore);
    }


    if (limit !== undefined && parseInt(limit, 10) > 0) {
      query.limit(parseInt(limit, 10));
    }    


    if (sortKey !== undefined) {
      const direction = sortDir === 'desc' ? 'desc' : 'asc';
      query.orderBy(`Meal.${sortKey}`, direction);
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
    const meals = await knex("Meal")    
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
    const meal = await knex("Meal")
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
    const meal = await knex("Meal")
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
    const meal = await knex("Meal")
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
    const meal = await knex("Meal")
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

      const reviews = await knex("Review")
          .where({ meal_id })
          .select();

      res.status(200).json(reviews);
  } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong");
  }
}); 

export default router;
