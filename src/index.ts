import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {signUp} from "./endpoints/signUp";
/*import {login} from "./endpoints/login";
import {getUserProfile} from "./endpoints/getUserProfile";
import {getUser} from "./endpoints/getUser";
import {createRecipe} from "./endpoints/createRecipe";
import {getRecipe} from "./endpoints/getRecipe";
import {followUser} from "./endpoints/followUser";
import {unFollowUser} from "./endpoints/unFollowUser";
import {getFeed} from "./endpoints/getFeed";*/

dotenv.config();

const app = express();
app.use(express.json());

app.post('/signup', signUp);
/*app.post('/login', login);
app.get('/user/profile', getUserProfile);
app.get('/user/:id', getUser);
app.post('/recipe', createRecipe);
app.get('/recipe/:id', getRecipe);
app.post('/user/follow', followUser);
app.post('/user/unfollow', unFollowUser);
app.get('/feed', getFeed);*/


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});