import Celulares from "../models/Celulares";

export const renderCelulares = async (req,res)=> {
    const celulares = await Celulares.find().lean();
    res.render("index", {celulares: celulares});
};

export const createCelulares = async (req, res)=>{
    try {
        const celulares = Celulares(req.body);

        await celulares.save();
        res.redirect("/agregarCelulares");
    } catch (error) {
        console.log(error);
    }
};

export const agregarCelulares = async (req,res)=> {
    const celulares = await Celulares.find().lean();

    res.render("agregarCelular", { celulares: celulares});
};

export const renderEditCelulares = async (req,res)=> {
    try {
        const celulares = await Celulares.findById(req.params.id).lean();
        res.render("editarCelular", {celulares});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCelulares = async (req, res) => {
    const {id} = req.params;
    await Celulares.findByIdAndUpdate(id, req.body);

    res.redirect("/agregarCelulares");
};

export const deleteCelulares = async (req, res) => {
    const {id} = req.params;
    await Celulares.findByIdAndDelete(id);

    res.redirect("/agregarCelulares");
};
