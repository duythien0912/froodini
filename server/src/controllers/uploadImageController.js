import path from "path";
import uuidv1 from "uuid/v1";
import sharp from "sharp";

export default {
  upload(req, res) {
    const imageFile = req.files.file;
    const id = uuidv1();
    sharp(imageFile.data)
      .resize(500)
      .toFile(
        `./public/UserData/${id}.jpeg`,
        (err, info) =>
          err ? console.log("error", err) : console.log("info:", info)
      );
    /*
    imageFile.mv(
      path.join(`./public/UserData/${id}.${imageFile.mimetype.split("/")[1]}`),
      err => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.json({
          filename: id,
          ImageUrl: `${process.env.HOST_IMAGE}/api/image/UserData/${id}.${
            imageFile.mimetype.split("/")[1]
          }`,
          ThumbnailUrl: `${process.env.HOST_IMAGE}/api/image/UserData/${id}.jpeg`
        });
      }
    );
    */
    return res.json({
      filename: id,
      ThumbnailUrl: `${process.env.HOST_IMAGE}/api/image/UserData/${id}.jpeg`
    });
  }
};
