 // code 1  require used to import library //  


lex x = 10 ;
console.log(x) ;


let x  = require ('superheroes') ;
console.log(x.all) ;



// code 2 webapp setup with single route  //


const express = require ("express") ;
const app = express() ;
app.listen(3000) ;
function kanna () {
  console.log("hiii")
}
app.get("/" , kanna) ;




// code 3 webapp with multi routes //

const express = require ('express') ;
const app = express() ;
const port = 5000 ;

function aboutpage (req ,res) {
  res.send ('<h1> About page </h1> ') ;
  console.log ('<h1> About page </h1> ') ;
  
  function homepage (req ,res) {
  res.send ('<h1> Home page </h1> ') ;
  console.log ('<h1> Home page </h1> ') ;
    
    function lw() {
      console.log ('server started ' )
    }
    
    app.get("/about" , aboutpage );
    app.get("/home" , homepage );
    app.listen (port)
    
    
    
    
