import { apiResponse } from "../../common/index.js";
import db from "../../models/index.js";
import path from 'path';


const CategoryModal = db.category;

export const get_category = async (req, res) => {
  let body = req.body;
  try {
    const data = await CategoryModal.findAll({ where: { isActive: true } });

    return res
      .status(200)
      .json(await apiResponse(200, "Category get successful!", data, {}));
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .json(await apiResponse(500, "Internal Server Error!", {}, error));
  }
};
export const add_category = async (req, res) => {
        const file = req.file; // The uploaded file information
  let body = req.body
  try {
    
    const response = await CategoryModal.create({ name: body?.name, image : file?.filename });
    return res
      .status(200)
      .json(await apiResponse(200, "Category add successful!", response, {}));
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .json(await apiResponse(500, "Internal Server Error!", {}, error));
  }
};
export const update_category = async (req, res) => {
  let body = req.body;
  try {
    const response = await CategoryModal.findByPk(body.id);
    if (!response)
      return res
        .status(200)
        .json(await apiResponse(200, "Category Not found", response, {}));

    const newData = CategoryModal.update({name : body.name}, {where : {id : body.id}, returning : true});
    return res
      .status(200)
      .json(await apiResponse(200, "Category update successful!", newData, {}));
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .json(await apiResponse(500, "Internal Server Error!", {}, error));
  }
};
export const category_by_id = async (req, res) => {
  let body = req.params;
  try {
    const response = await CategoryModal.findByPk(body.id);
    const filePath = await path.resolve("uploads/"+response.image);
    if (!response)
      return res
        .status(200)
        .json(await apiResponse(200, "Category Not found", response, {}));
        response.image = filePath;
    return res
      .status(200)
      .json(await apiResponse(200, "Category get successful!",response, {}));
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .json(await apiResponse(500, "Internal Server Error!", {}, error));
  }
};
export const delete_category = async (req, res) => {
  let body = req.params;
  try {
    const response = await CategoryModal.findByPk(body.id);
    if (!response)
      return res
        .status(200)
        .json(await apiResponse(200, "Category Not found", response, {}));
    const deleteData = await CategoryModal.destroy({where : {id : body.id}})
    return res
      .status(200)
      .json(await apiResponse(200, "Category delete successful!", response, {}));
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .json(await apiResponse(500, "Internal Server Error!", {}, error));
  }
};
