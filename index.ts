import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import routes from './src/routes/routes';
import sequelize from "./src/config/config";

app.use(express.json());
app.use('/api', routes);
const port = 3000;
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => {
            console.log(`запущен на ${port} порту`)
        });
    } catch (error) {
        console.log(error)
    }
}
start()