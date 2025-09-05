import {registerUser} from "../service/auth.service";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    try{
        const user = await registerUser(req.body);
        res.status(201).send(user);
    }catch(error){
        res.status(500).send({
            message: 'Что-то пошло не так',
        })
    }
}