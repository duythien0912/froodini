import uuidv1 from "uuid/v1";
import categoryModel from "../models/categoryModel";

import eventModel from "../models/eventModel";

/**
 * eventController.js
 *
 * @description :: Server-side logic for managing events.
 */
export default {
  /**
   * eventController.list()
   */
  list(req, res) {
    eventModel.find((err, events) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting event.",
          error: err
        });
      }
      return res.json(events);
    });
  },

  /**
   * eventController.show()
   */
  show({ params }, res) {
    const id = params.id;
    eventModel.findOne({ _id: id }, (err, event) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting event.",
          error: err
        });
      }
      if (!event) {
        return res.status(404).json({
          message: "No such event"
        });
      }
      return res.json(event);
    });
  },

  /**
   * eventController.create()
   */
  create({ body }, res) {
   
    const event = new eventModel({
      title: body.title,
      description: body.description,
      name: body.name,
      date: body.date,
      place: body.place,
      time: body.time,
      user: body.user,
      color:body.color,
      category: body.category,
      imageurl: body.urlimg ? body.urlimg : body.imagecategory,
      thumbnailurl: body.thumbnailurl ? body.thumbnailurl : body.imagecategory,
      linkevent: `${process.env.CLIENT}/event/`
    });

    event.save((err, event) => {
      console.log(err);
      if (err) {
        return res.status(500).json({
          message: "Error when creating event",
          error: err
        });
      }
      return res.status(201).json(event);
    });
  },

  /**
   * eventController.update()
   */
  update({ params, body }, res) {
    const id = params.id;

    
    eventModel.findOne({ _id: id }, (err, event) => {
   
      if (err) {
        return res.status(500).json({
          message: "Error when getting event",
          error: err
        });
      }
      if (!event) {
        return res.status(404).json({
          message: "No such event"
        });
      }
      console.log(body.name);
      event.name = body.name ? body.name : event.name;
      event.title = body.title ? body.title : event.title;
      event.description = body.description ? body.description : event.description;
      event.color = body.color ? body.color : event.color;
      event.date = body.date ? body.date : event.date;
      event.place = body.place ? body.place : event.place;
      event.time = body.time ? body.time : event.time;
      event.user = body.user ? body.user : event.user;
      event.category = body.category ? body.category : event.category;
      event.imageurl = body.urlimg ? body.urlimg : event.urlimg;
      event.thumbnailurl = body.thumbnailurl
        ? body.thumbnailurl
        : event.thumbnailurl;

      event.save((err, event) => {
        if (err) {
          return res.status(500).json({
            message: "Error when updating event.",
            error: err
          });
        }

        return res.json(event);
      });
    });
  },

  /**
   * eventController.update()
   */
  updateOption({ params, body }, res) {
    const id = params.id;
    eventModel.findOne({ _id: id }, (err, event) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting event",
          error: err
        });
      }
      if (!event) {
        return res.status(404).json({
          message: "No such event"
        });
      }

    
      const name = body.name;
      const data = { name, option: body.optionData };
      const data2 = event.guest ? [...event.guest, data] : event.guest;

      event.guest = body.optionData ? data2 : event.guest;

      event.save((err, event) => {
        if (err) {
          return res.status(500).json({
            message: "Error when updating option.",
            error: err
          });
        }
        return res.json(data2);
      });
    });
  },

  /**
   * eventController.remove()
   */
  remove({ params }, res) {
    const id = params.id;
    eventModel.findByIdAndRemove({ _id: id }, (err, event) => {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the event.",
          error: err
        });
      }
      if (!event) {
        return res.status(404).json({
          message: "No such event"
        });
      }

      return res.status(204).json();
      
    });
  }
};
