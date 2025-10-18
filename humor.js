let target=prompt("Input the target=");
let i,j;
let sum=0;
let a=[2,11,15,7];
for(i=0,j=a.length;i<j;i++,j--) {
    sum=a[i]+a[j];
    if(sum==target) {
       
        break;
    }

}
console.log(i,j);