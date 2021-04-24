const Item = require("../model/items");

exports.register = async (item) => {
  try {
    const newItem = await Item.create(item);
    return newItem;
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while creating Item");
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (item) => {
  try {
    const items = await Item.findAll({
      where: item,
    });
    return items;
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while finding Items");
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const items = await Item.findAll({
      where: {
        id,
      },
    });
    return items;
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while finding item by id");
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newItem) => {
  try {
    return await Item.update(newItem, {
      where: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while updating item");
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newItem) => {
  try {
    const item = await Item.findOne({ id });
    item.set(newItem);
    item.save();
    return item;
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while updating Items");
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const item = await Item.destroy({
      where: {
        id,
      },
    });
    return item;
  } catch (err) {
    console.log(err);
    const error = new Error("An error ocurred while deleting Items");
    error.statusCode = 500;
    throw error;
  }
};
