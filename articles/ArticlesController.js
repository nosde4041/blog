const express = require ("express");
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("Rota de artigos");
})

router.get("/admin/articles", (req, res) => {
    res.send("Administação de Artigos");
})

module.exports = router;