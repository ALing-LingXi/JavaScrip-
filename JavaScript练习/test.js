const n1 = readline()
let num1 = 0
for(let i =0 ;i<n1.length-2;i++){
   if(n1[i]!==n[i+1]){
    if(n1[i+1]==n1[i+2]){
      num1++
    }
   }
}