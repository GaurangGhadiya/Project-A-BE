import { apiResponse } from "../../common/index.js";
import { generateToken } from "../../helpers/generateToken.js";
import { hashPassword, comparePassword } from "../../helpers/bcrypt.js";
import db from "../../models/index.js";

const UserModal = db.user;

export const login = async (req, res) => {
  let body = req.body;
  try {
    // const data =await UserModal.create({user_name : "admin", password : await hashPassword("123"), email : "admin@gmail.com", "phone_number": "9016193206", userType : 0})
    // if(data.id){
    //     var newData = await UserModal.update({token : generateToken(data.id)},{ where: {id: data.id}, returning : true})
    // }

    const findUser = await UserModal.findOne({
      where: { email: body?.email, userType: 0, isActive: true },
    });
    if (!findUser)
      return res
        .status(400)
        .json(await apiResponse(400, "User not found!", {}, {}));

    const compare = await comparePassword(body?.password, findUser.password);
    if (!compare)
      return res
        .status(400)
        .json(await apiResponse(400, "Invalid email or password", {}, {}));
    let newToken = await generateToken({id : findUser.id, userType : findUser.userType});
    var newData = await UserModal.update(
      { token: newToken },
      { where: { id: findUser.id }, returning: true }
    );
    return res
      .status(200)
      .json(await apiResponse(200, "Login successful!", newData?.[1]?.[0], {}));
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .json(await apiResponse(500, "Internal Server Error!", {}, error));
  }
};
