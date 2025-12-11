const account_no  =  102949201;
let mailId = "amanad08052@gmail.com" 
var password = "Admin@123"
IFSC = "Account12940" // we can also store the variable values without using name of variable type , but no good for use 
let accountState;
// account_no = 1029212; // not executing 
// mailId = "rdxking795@gmail.com"
/*
Prefer not to use var
because of issue in block scope and the functional scope
*/

console.log(account_no);
console.log(mailId);
console.table([account_no,mailId,password,IFSC,accountState])
