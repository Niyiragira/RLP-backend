import express from "express"
import welcomeRoutes from "./welcomeRoute"

const router = express();

router.get('/', async (req, res) => {
    res.status(200).json({
        message: "Welcome to our RLP. Happy learning"
    })
})

export default router;
