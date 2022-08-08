const {exec} = require("child_process") ;
function lw (err , stdout , stderr) {
  console.log(stdout)  
}
exec ( "date" ,lw )
