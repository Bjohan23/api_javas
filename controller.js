const pool = require("./database/db");

const controller = {
  datosParaGrafico: async () => {
    try {
      const [results] = await pool.query(
        "SELECT cantidad, peso_kg, fecha, peso_neto FROM RegistroJavas"
      );

      // Formatear los resultados para el gráfico
      const dataForChart = {
        results: results.map((row) => ({
          cantidad: row.cantidad,
          peso_kg: row.peso_kg,
          fecha: new Date(row.fecha).toLocaleString(),
          peso_neto: row.peso_neto,
        })),
      };

      return dataForChart;
    } catch (error) {
      console.error("Error al obtener datos para el gráfico:", error);
      throw error;
    }
  },
};

module.exports = controller;
