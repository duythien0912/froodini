import fs from "fs-extra";
import path from "path";

export default {
  list({ body }, res) {
    const file = path.join(__dirname, "../client/locales");

    /*
    const copy = async f => {
      try {
        await fs.outputJson(f, { name: "JP" });

        const data = await fs.readJson(f);

        console.log(data.name); // => JP
      } catch (err) {
        console.error(err);
      }
    };
    copy(`${file}/vi/translations.json`);
    */

    /*     fs.outputFile(`${dir}/vi/index.txt`, "hello!", err => {
      console.log(err); // => null

      fs.readFile(`${dir}/vi/index.txt`, "utf8", (err, data) => {
        console.log(data); // => hello!
      });
    }); */

    fs.readdir(file, (err, files) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).json(files);
    });
  }
};
