import {get, pop, spawn} from "../sheepManager/sheepfold.js";

/**
 * Created by Adrien on 16/12/2022
 */
function app(app) {
    app.get('/', (req, res) => {
        return res._200("Welcome !");
    });
    app.get('/spawn', (req, res) => {
        spawn();
        return res._200();
    });
    app.get('/pop', (req, res) => {
        pop();
        return res._200();
    });
    app.get('/get', (req, res) => {
        const nbSheep = get();
        return res._200("Number of sheep in the fold : " + nbSheep);
    });
}
export default app;