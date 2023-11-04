const express = require ("express");
const router = express.Router();

router.get("/categories", (req, res) => {
    res.send("Rota de categorias");
})

router.get("/admin/categories", (req, res) => {
    res.send("Administação de Categorias");
})

module.exports = router;
