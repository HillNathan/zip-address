<<<<<<< HEAD
// include any additional middleware declarations up here:
// i.e.
// const API = require("../controller");

module.exports = app => {

    // Starting route to confirm everything is set up to run through express
=======
const db = require("../controller");
// var path = require("path");

module.exports = app => {

    // app.get('/', (req,res) => {
    //     res.sendFile('path.join("index.html")');
    // })

>>>>>>> 50b116309e755a3c2eaa1bb244df98b3a394ffe9
    app.get('/express_backend', (req, res) => {
        res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
      });

<<<<<<< HEAD
}

=======
    app.get('/get_home', (req, res) => {
        db.getInfo(17603, response => {
            res.send({data: response})
            }
        )
    });

    app.post('/get_zip', (req, res) => {
        db.getInfo(req.body.zipCode, response => {
            res.send({data: response})
            }
        )    
    });

}
>>>>>>> 50b116309e755a3c2eaa1bb244df98b3a394ffe9
