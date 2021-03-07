import productMovement from '../service/productMovement.service.js'

export default {
    AllMovement: (req,res) => {
        productMovement.allMovement((err,  result) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message: `Error :- ${err}`
                });
            } else if(result) {
                return res.status(200).json({
                    success: true,
                    data: result
                });
            }
        });
    },
    AddMovement: (req,res) => {
        const body = req.body;
        productMovement.addMovement(body, (err,  result) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message: `Error :- ${err}`
                });
            } else if(result) {
                return res.status(200).json({
                    success: true,
                    data: result
                });
            }
        });
    },
}