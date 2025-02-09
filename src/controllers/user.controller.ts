import { Request, Response } from "express";
import UserService from "../services/user.service";
import { successResponse, errorResponse } from "../utils/response";

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(successResponse({}));
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      res.status(500).json(errorResponse(errorMessage));
    }
  }
}

export default new UserController();
