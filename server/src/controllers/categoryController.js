import categoryModel from "../models/categoryModel";

/**
 * categoryController.js
 *
 * @description :: Server-side logic for managing categorys.
 */
export default {
  /**
   * categoryController.list()
   */
  list(req, res) {
    categoryModel.find((err, categorys) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting category.",
          error: err
        });
      }
      return res.json(categorys);
    });
  },

  /**
   * categoryController.show()
   */
  show(req, res) {
    const id = req.params.id;
    categoryModel.findOne({ _id: id }, (err, category) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting category.",
          error: err
        });
      }
      if (!category) {
        return res.status(404).json({
          message: "No such category"
        });
      }
      return res.json(category);
    });
  },

  /**
   * categoryController.create()
   */
  create(req, res) {
    const category = new categoryModel({
      nameCategory: req.body.nameCategory,
      data: {
        namedish: req.body.namedish,
        content: req.body.content,
        urlimg: req.body.urlimg,
        timeborn: req.body.timeborn,
        color: req.body.color
      }
    });

    category.save((err, category) => {
      if (err) {
        return res.status(500).json({
          message: "Error when creating category",
          error: err
        });
      }
      return res.status(201).json(category);
    });
  },

  createDish(req, res) {
    const name = req.params.name;
    categoryModel.findOne({ namecategory: name }, (err, category) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting category",
          error: err
        });
      }
      if (!category) {
        return res.status(404).json({
          message: "No such category"
        });
      }
      category.namecategory = req.body.namecategory
        ? req.body.namecategory
        : category.namecategory;

      category.data = [
        ...category.data,
        {
          namedish: req.body.namedish,
          content: req.body.content,
          urlimg: req.body.urlimg,
          color: req.body.color
        }
      ];
      console.log(req.body.namedish);

      category.save((err, category) => {
        if (err) {
          return res.status(500).json({
            message: "Error when updating category dish.",
            error: err
          });
        }

        return res.json(category);
      });
    });
  },

  /**
   * categoryController.update()
   */
  update(req, res) {
    const id = req.params.id;
    categoryModel.findOne({ _id: id }, (err, category) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting category",
          error: err
        });
      }
      if (!category) {
        return res.status(404).json({
          message: "No such category"
        });
      }
       category.nameCategory = req.body.nameCategory;
       category.data[0].namedish = req.body.namedish;
       category.data[0].content = req.body.content;
       category.data[0].urlimg = req.body.urlimg;
       category.data[0].color = req.body.color;
       
      category.save((err, category) => {
        if (err) {
          return res.status(500).json({
            message: "Error when updating category.",
            error: err
          });
        }

        return res.json(category);
      });
    });
  },

  updateDish(req, res) {
    const name = req.params.name;
    const id = req.params.id;
    categoryModel.update(
      { nameCategory: name, "data._id": id },
      {
        $set: {
          "data.$.namedish": req.body.namedish,
          "data.$.content": req.body.content,
          "data.$.urlimg": req.body.urlimg,
          "data.$.color": req.body.color
        }
      },
      (err, category) => {
        if (err) {
          return res.status(500).json({
            message: "Error when getting category",
            error: err
          });
        }

        return res.json(category);
      }
    );
  },

  /**
   * categoryController.remove()
   */
  remove(req, res) {
    const id = req.params.id;
    categoryModel.findByIdAndRemove(id, (err, category) => {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the category.",
          error: err
        });
      }
      return res.status(204).json();
    });
  },

  removeDish(req, res) {
    const name = req.params.name;
    const id = req.params.id;
    categoryModel.update(
      { nameCategory: name },
      { $pull: { data: { _id: id } } },
      { safe: true, multi: true },
      (err, obj) => {
        if (err) {
          return res.status(500).json({
            message: "Error when deleting the category.",
            error: err
          });
        }
        return res.status(204).json();
      }
    );
  }
};
