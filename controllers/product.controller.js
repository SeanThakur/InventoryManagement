import product from '../service/product.service.js'

export default {
    AllProduct: (req,res) => {
        product.allProducts((err,  result) => {
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
    AddProduct: (req,res) => {
        const body = req.body;
        product.addProduct(body, (err,  result) => {
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