const express = require("express");
const http = require("http");

const app = express();

// Configuraciones de middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./router"));

const asignarPuertoAutomático = () => {
  const puertoInicial = 3000;
  const puertoFinal = 4000;

  function intentarAsignarPuerto(puerto) {
    const server = http.createServer(app);

    server.listen(puerto, () => {
      console.log(`Server CORRIENDO EN PUERTO : http://localhost:${puerto}`);
    });

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        console.log(`Puerto ${puerto} en uso, probando el siguiente.`);
        server.close();
        intentarAsignarPuerto(puerto + 1);
      } else {
        console.error("Error al intentar asignar el puerto:", error.message);
      }
    });
  }
  intentarAsignarPuerto(puertoInicial);
};
asignarPuertoAutomático();
