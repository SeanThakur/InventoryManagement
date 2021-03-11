import location from '../service/location.service.js'

export default {
    AddLocation: (req,res) => {
        const body = req.body;
        location.addLocation(body, (err,  result) => {
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
    AllLocation: (req,res) => {
        const body = req.body;
        location.allLocation((err,  result) => {
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