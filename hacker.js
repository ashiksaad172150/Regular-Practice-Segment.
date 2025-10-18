let num=[0,0,1,1,1,2,2,3,3,4];
let i,j;
for(i=0,j=1;i<num.length,j<num.length-1;i++,j++) {
if(num[i]==num[j]) {
num[i]=num[i+1];
}
}
for(i=0;i<num.length-1;i++) {
    console.log(num[i]);
}