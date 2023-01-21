const { response } = require("express");
const express = require("express");

const app = express();

const PORT = 4001;
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("/sum for sum api\n/product for product api\n/subtract for subtract api")
})
app.get("/sum", (request, response) => {
    let a = 0;
    if(JSON.stringify(request.body)==="{}"){
        response.send("Json Parameters : Unlimited key value pairs\nNo restriction on keys length and names\nValues should be numbers");
    }
    Object.entries(request.body).forEach(([key,value])=>{
        a = a+value;
    });
    if(isNaN(a)){
        response.send("Json Parameters : Unlimited key value pairs\nNo restriction on keys length and names\nValues should be numbers");
    }else{
        response.send(`${a}`);
    }
})

app.get("/subtract", (request, response) => {
    let a = request.body.num1;
    let b = request.body.num2;
    let c = a - b;
    if(isNaN(c)){
        response.send("Json Parameters : 2\nKey1 : num1, key2: num2");
    }else{
        response.send(`${c}`);
    }
    // console.log(a);
})
app.get("/product", (request, response) => {
    let a = 1;
    Object.entries(request.body).forEach(([key,value])=>{
        a = a*value;
    });
    if(isNaN(a)){
        response.send("Json Parameters : Unlimited key value pairs\nNo restriction on keys names and length\nValues should be numbers");
    }else{
        response.send(`${a}`);
    }
})

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));