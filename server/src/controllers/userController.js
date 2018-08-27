import userModel from "../models/userModel";

/**
 * userController.js
 *
 * @description :: Server-side logic for managing items.
 */
export default {
  /**
   * itemController.list()
   */
  list(req, res) {
    userModel.find((err, items) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting item.",
          error: err
        });
      }
      return res.json(items);
    });
  },

  /**
   * itemController.show()
   */
  show({ params }, res) {
    const id = params.id;
    userModel.findOne({ _id: id }, (err, item) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting item.",
          error: err
        });
      }
      if (!item) {
        return res.status(404).json({
          message: "No such item"
        });
      }
      return res.json(item);
    });
  },

  /**
   * itemController.create()
   */
  create({ body }, res) {
    const user = new userModel({
      fristname: body.fristname,
      lastname: body.lastname,
      email: body.email,
      avatarurl: body.avatarurl,
    });

    user.save((err, user) => {
      if (err) {
        return res.status(500).json({
          message: "Error when creating item",
          error: err
        });
      }
      return res.status(201).json(user);
    });
  },

  /**
   * itemController.update()
   */
  update({ params, body }, res) {
    const id = params.id;
    userModel.findOne({ _id: id }, (err, user) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting item",
          error: err
        });
      }
      if (!user) {
        return res.status(404).json({
          message: "No such item"
        });
      }

      user.fristname = body.fristname ? body.fristname : user.fristname;
      user.lastname = body.lastname ? body.lastname : user.lastname;
      user.email = body.email ? body.email : user.email;
      user.avatarurl = body.avatarurl ? body.avatarurl : user.avatarurl;
      

      userModel.save((err, user) => {
        if (err) {
          return res.status(500).json({
            message: "Error when updating user.",
            error: err
          });
        }

        return res.json(user);
      });
    });
  },

  /**
   * itemController.remove()
   */
  remove({ params }, res) {
    const id = params.id;
    userModel.findByIdAndRemove(id, (err, user) => {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the item.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
