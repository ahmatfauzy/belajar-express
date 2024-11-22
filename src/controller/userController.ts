import { log } from "console";
import express from "express";

let dummyUser = [
  { id: 1, nama: "Budi", email: "budi@gmail,com" },
  { id: 2, nama: "Zaki", email: "zaki@gmail,com" },
];

export const getAlluser = async (req: any, res: any) => {
  try {
    await dummyUser;
    res.status(200).send({
      data: dummyUser,
      status: 200,
      message: "Get user succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const createuser = async (req: any, res: any) => {
  try {
    await dummyUser.push(req.body);
    res.status(201).send({
      data: dummyUser,
    });
  } catch (error) {
    console.log({ message: "cannot post user" });
  }
};

export const updateUser = async (req: any, res: any) => {
  try {
    const id = req.params.id;
    await dummyUser.filter((dummyUser) => {
      if (dummyUser.id == id) {
        dummyUser.id = id;
        dummyUser.nama = req.body.nama;
        dummyUser.email = req.body.email;

        return dummyUser;
      }
    });
    res.status(202).send({
      data: dummyUser,
      message: "update user succsesfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req: any, res: any) => {
  try {
    const id = req.params.id;

    // error handling
    const filterUsers = dummyUser.filter((user) => user.id != id);
    if (filterUsers.length === dummyUser.length) {
      return res.status(404).send({
        status: 404,
        message: "User not found",
      });
    }

    dummyUser = filterUsers;

    res.status(200).send({
      status: 200,
      message: "User deleted successfully",
      data: dummyUser,
    });
  } catch (error) {
    console.log(error);
  }
};
