
//console.log(__path)
import fs from 'fs'
//console.log(fs)
var data = fs.readFileSync('test.txt',{
	encoding:'utf-8'//编码格式
})
console.log('============-------')
console.log(data)

 fs.readFile('test.txt','utf-8',(err,data)=>{
	if(err){
		console.log(err)
		return 
	}
	console.log('==========')
	console.log(data)
})
console.log('----------------')
let a = 10
console.log('a'+a)