import itemModel from "../models/itemModel";

/**
 * itemController.js
 *
 * @description :: Server-side logic for managing items.
 */
export default {
  /**
   * itemController.list()
   */
  list(req, res) {
    itemModel.find((err, items) => {
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
    itemModel.findOne({ _id: id }, (err, item) => {
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
    const item = new itemModel({
      buttontext: body.buttontext,
      picture: body.picture,
      header: body.header,
      description: body.description,
      price: body.price,
      showitemprice: body.showitemprice,
      link: body.externallink,
      sortingscore:body.sortingscore
    });

    item.save((err, item) => {
      if (err) {
        return res.status(500).json({
          message: "Error when creating item",
          error: err
        });
      }
      return res.status(201).json(item);
    });
  },

  /**
   * itemController.update()
   */
  update({ params, body }, res) {
    const id = params.id;
  
    itemModel.findOne({ _id: id }, (err, item) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Error when getting item",
          error: err
        });
      }

     
      if (!item) {
       
        return res.status(404).json({
          message: "No such item"
        });
      }
      
      item.buttontext = body.buttontext ? body.buttontext : item.buttontext;
      item.picture = body.picture ? body.picture : item.picture;
      item.header = body.header ? body.header : item.header;
      item.description = body.description ? body.description : item.description;
      item.price = body.price ? body.price : item.price;
      item.showitemprice = body.showitemprice;
      item.link = body.link ? body.link : item.link;
      item.sortingscore = body.sortingscore ? body.sortingscore : item.sortingscore;

      item.save((err, item) => {
        if (err) {
          return res.status(500).json({
            message: "Error when updating item.",
            error: err
          });
        }

        return res.json(item);
      });
    });
  },

  /**
   * itemController.remove()
   */
  remove({ params }, res) {
    const id = params.id;
    itemModel.findByIdAndRemove(id, (err, item) => {
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
