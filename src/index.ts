import * as express from "express";
import * as helmet from "helmet";
import * as cors from "cors";
import ROUTER from "./routes";

const PORT = process.env.PORT || 3000;

try {
    
    const app = express();

    app.use(helmet());
    app.use(express.json());
    app.use(cors());
    
    // routes
    app.use("/", ROUTER);
    
    // start express server
    app.listen(PORT);
    
    console.log(`The server has started on port ${PORT}. Open http://localhost:${PORT}/ to see results`);
} catch (error) {
    console.error(error);
}
