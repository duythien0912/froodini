import foodModel from "../models/foodModel";

/**
 * foodController.js
 *
 * @description :: Server-side logic for managing foods.
 */
export default {
  /**
   * foodController.list()
   */
  list(req, res) {
    foodModel.find((err, foods) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting food.",
          error: err
        });
      }
      return res.json(foods);
    });
  },

  /**
   * foodController.show()
   */
  show({ params }, res) {
    const id = params.id;
    foodModel.findOne({ _id: id }, (err, food) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting food.",
          error: err
        });
      }
      if (!food) {
        return res.status(404).json({
          message: "No such food"
        });
      }
      return res.json(food);
    });
  },

  /**
   * foodController.create()
   */
  create({ body }, res) {
    const food = new foodModel({
      name: body.name,
      image: body.image,
      description: body.description,
      participants: body.participants,
      sortingscore:body.sortingscore,
      type: body.type,
      active:body.active
    });

    food.save((err, food) => {
      if (err) {
        return res.status(500).json({
          message: "Error when creating food",
          error: err
        });
      }
      return res.status(201).json(food);
    });
  },

  /**
   * foodController.update()
   */
  update({ params, body }, res) {
    const id = params.id;
    foodModel.findOne({ _id: id }, (err, food) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting food",
          error: err
        });
      }
      if (!food) {
        return res.status(404).json({
          message: "No such food"
        });
      }

      food.name = body.name ? body.name : food.name;
      food.image = body.image ? body.image : food.image;
      food.description = body.description ? body.description : food.description;
      food.participants = body.participants
        ? body.participants
        : food.participants;
      food.type = body.type ? body.type : food.type;
      food.sortingscore = body.sortingscore ? body.sortingscore : food.sortingscore;
      food.active = body.active ? body.active : food.active;

      food.save((err, food) => {
        if (err) {
          return res.status(500).json({
            message: "Error when updating food.",
            error: err
          });
        }

        return res.json(food);
      });
    });
  },

  /**
   * foodController.remove()
   */
  remove({ params }, res) {
    const id = params.id;
    foodModel.findByIdAndRemove(id, (err, food) => {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the food.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
