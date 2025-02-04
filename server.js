const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let reservas = [];

app.get("/reservas", (req, res) => {
    res.json(reservas);
});

app.post("/reservar", (req, res) => {
    const { nombre, ciudad, fecha } = req.body;
    const nuevaReserva = { id: reservas.length + 1, nombre, ciudad, fecha };
    reservas.push(nuevaReserva);
    res.json({ mensaje: "Reserva realizada con éxito", reserva: nuevaReserva });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
