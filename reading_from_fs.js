// non-blocking method
const {readFile, readFileSync} = require('fs')

readFile('./hello.','utf8',(err,txt)=>{
    console.log(txt)
})
console.log('do it ASAP')

// using promises
const {readFile, readFileSync} = require('fs').promises;

async function hello(){
    const file = await readFile('./hello.txt','utf8')
    console.log(file)
}
hello()
console.log('do it ASAP')