const express= require("express");
const app = express();
let port = 8080;


app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

   /*app.get("/",(req,res)=>{
    res.send("hello,i am root");
   });
    
    
    app.get("/:username/:id", (req,res) => {
        
        let { username, id} = req.params;
        res.send(`this accounts belong to @${username}`);
    });*/

    

    app.listen(port,()=>{
        console.log(`port is istening on ${port}`);
    });
    