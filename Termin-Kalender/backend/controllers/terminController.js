import Termin from "../models/Termin.js";

export const getAllTermine = async (req, res) => {
    try {
        const termine = await Termin.find();
        res.json(termine);
    } catch (error) {
        // console.error(error);
        // res.status(404).send();
    }
};
export const getOneTermin = async (req, res) => {
    try {
        const findTermin = await Termin.findById(req.params.id);
        res.send(findTermin);
        console.log("Hallo findTermin");
    } catch (error) {
        console.error(error);
        res.status(404).send();
    }
};

export const createdTermin = async (req, res) => {
    const createdTermin = new Termin(req.body);
    console.log(createdTermin);
    try {
        const termin = await createdTermin.save();
        res.status(201).json(termin);
    } catch (error) {
        console.error(error);
        res.status(404).send();
    }
};

export const updateTermin = async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne(
          { _id: req.params.id },
          { $set: req.body }
        );
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
};

export const deleteOneTermin = async (req, res) => {
    try {
        const deletTermin = await Termin.findByIdAndDelete(req.params.id);
        res.send(deletTermin);
        console.log("hallo maroco deleteOneTermin");
    } catch (error) {
        console.error(error);
        res.status(404).send();
    }
};
