const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/grafico", async (req, res) => {
  try {
    const dataForChart = await controller.datosParaGrafico();
    res.json(dataForChart);
  } catch (error) {
    console.error("Error al obtener datos para el gráfico:", error);
    res.status(500).json({ error: "Error al obtener datos para el gráfico" });
  }
});
router.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

module.exports = router;
