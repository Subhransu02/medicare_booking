// import express from "express";
// import {
//   updateUser,
//   deleteUser,
//   getAllUser,
//   getSingleUser,
// } from "../Controllers/userController.js";
// import { authenticate, restrict } from "../auth/verifyToken.js";
// function errorHandler(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Server Error');
//  }
// const router = express.Router();

// router.get("/", authenticate, restrict(["admin"]), getAllUser, errorHandler);
// router.get("/:id", authenticate, restrict(["patient"]), getSingleUser, errorHandler);
// router.put("/:id", authenticate, restrict(["patient"]), updateUser, errorHandler);
// router.delete("/:id", authenticate, restrict(["patient"]), deleteUser, errorHandler);
// export default router;


import express from "express";
import {
 updateUser,
 deleteUser,
 getAllUser,
 getSingleUser,
} from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";



const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), async (req, res, next) => {
 try {
    await getAllUser(req, res, next);
 } catch (error) {
    next(error);
 }
}, errorHandler);

router.get("/:id", authenticate, restrict(["patient"]), async (req, res, next) => {
 try {
    await getSingleUser(req, res, next);
 } catch (error) {
    next(error);
 }
}, errorHandler);

router.put("/:id", authenticate, restrict(["patient"]), async (req, res, next) => {
 try {
    await updateUser(req, res, next);
 } catch (error) {
    next(error);
 }
}, errorHandler);

router.delete("/:id", authenticate, restrict(["patient"]), async (req, res, next) => {
 try {
    await deleteUser(req, res, next);
 } catch (error) {
    next(error);
 }
}, errorHandler);

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Server Error');
 }

 
export default router;