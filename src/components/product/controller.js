import prisma from "../../db";
import { success, failed } from "../../responses";

export const findAll = async (req, res) => {
  try {
    const categories = await prisma.product.findMany();
    return success({ res, data: categories });
  } catch (error) {
    return failed({ res, error });
  }
};

export const findOne = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const category = await prisma.product.findUnique({
      where: { id },
    });
    return success({ res, data: category });
  } catch (error) {
    console.log(error);
    return failed({ res, error });
  }
};

export const create = async (req, res) => {
  try {
    const category = await prisma.product.create({
      data: req.body,
    });
    return success({ res, data: category, status: 201 });
  } catch (error) {
    return failed({ res, error });
  }
};

export const update = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const category = await prisma.product.update({
      where: { id },
      data: req.body,
    });
    return success({ res, data: category });
  } catch (error) {
    return failed({ res, error });
  }
};

export const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const category = await prisma.product.delete({
      where: { id },
    });
    return success({ res, data: category });
  } catch (error) {
    return failed({ res, error });
  }
};