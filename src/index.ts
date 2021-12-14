import * as express from "express";
import * as helmet from "helmet";

const PORT = process.env.PORT || 3000;

try {
    
    const app = express();
    
    // middlewares
    //app.use(cors());
    app.use(helmet());
    app.use(express.json());
    
    // routes
    //app.use("/api", ROUTER);
    
    // start express server
    app.listen(PORT);
    
    console.log(`The server has started on port ${PORT}. Open http://localhost:${PORT}/api/users to see results`);
} catch (error) {
    
}
