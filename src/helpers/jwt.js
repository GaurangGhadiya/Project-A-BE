import jwt from "jsonwebtoken";
import { apiResponse } from "../common/index.js";
const jwt_token_secret = "P₹0Je(t_A"; // Replace with your secret key

export const adminJWT = async (req, res, next) => {
  try {
    let { authorization, userType } = req.headers;
    if (authorization) {
      try {
        const token = authorization.split(" ")[1]; // The token follows the 'Bearer ' part

        let isVerifyToken = jwt.verify(token, jwt_token_secret);
        if (isVerifyToken?.userType != 0) {
          return res
            .status(403)
            .json(await apiResponse(403, "Invalid Token", {}, {}));
        } else {
          req.user = isVerifyToken;
          return next();
        }
      } catch (err) {
        if (err.message == "invalid signature")
          return res
            .status(403)
            .json(await apiResponse(403, "Invalid Token", {}, {}));
        return res
          .status(401)
          .json(await apiResponse(401, "Invalid Token", {}, {}));
      }
    } else {
      return res
        .status(401)
        .json(await apiResponse(401, "Token Not Found", {}, {}));
    }
  } catch (err) {
    if (err.message == "invalid signature")
      return res
        .status(403)
        .json(await apiResponse(403, "Invalid Token", {}, {}));
    console.log(err);
    return res
      .status(500)
      .json(
        await apiResponse(500, "Admin access internal server error", {}, {})
      );
  }
};
