
module.exports = app => {

    // app.get('/', (req,res) => {
    //     res.sendFile('path.join("index.html")');
    // })

    app.get('/express_backend', (req, res) => {
        res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
      });

}
