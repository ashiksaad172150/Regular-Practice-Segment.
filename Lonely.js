/* let nums=[1,2,3,4];
let i,j,k,l;
let ans=[];
for(i=0;i<nums.length;i++) {
    for(j=0,k=1,l=2;j<nums.length,k<nums.length,l<nums.length;j++,k++,l++) {
      if((i!=j)&&(i!=k)&&(i!=l)) {
        ans[i]=nums[j]*nums[k]*nums[l];
      }
    }
}
console.log(ans);
*/

/*
const text="JamiatulAhliyah";
console.log(text.substring(-5,2));
*/
/*
const x=new String("Ummay Jamila Khanam Siddika.");
console.log(x.valueOf()); */

/*
const acer="JamiatulAhliyah";
console.log(acer.substring(-5,2));
*/
//const x=new String("Ashik Riaz");
//console.log(x.toString());
//Exact String Will Return First Its your choice.
//Exact String Will return First Its your Choice.
/*
const y=new String("Jamia Diniya Darul Hidaya");
console.log(y.toString());
*/

/*
const str = "5";

console.log(str.padStart(2, "0"));
// Expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// Expected output: "************5581"
*/
/*
const pass="saadsakib172@";
const first=pass[0];
const masked=first.padEnd(pass.length,"$");
console.log(masked);
*/
/*
const name="Ashik";
console.log(name.padEnd(10,"/"));
*/
/*
const name="Asif";
console.log(name.padEnd(10,"+"));
*/
/*
const serial="88";
console.log(serial.padStart(6,"%"));
*/
/*
let Sufi="58";
console.log(Sufi.padStart(8,"*"));
*/
/*
const phon="01622998278";
const ldig=phon.slice(0,3);
const mask=ldig.padEnd(phon.length,"@");
console.log(mask);
*/
/*
const param="I think Saad's Dog is cuter than Sakib";
console.log(param.replace("Saad's","JANY's"));
*/
/*const ollyo="Al Jamiyatul Ahliyah Darul Uloom Muinul Islam";
console.log(ollyo.replace("Al","WAL"));
*/
/*
const param="Al Jamiyatul Ahliyah Darul Uloom Muinul Islam";
const reg=/Ahliyah/i;
console.log(param.replace(reg,"Diniya"));
*/
/*
let nums=[-1,0,1,2,-1,-4];
let i,j,k,m;
let sum=[];
let temp=[];
k=0;
for(i=0;i<nums.length;i++) {
  for(j=0;j<(nums.lenth-1);j++) {
   if(sum[i]==0) {
    temp[0][k++]=`${nums[i]},${nums[j]},${nums[j+1]}`;
   }
  }
}
console.log(temp);
*/

/*
for(m=0;m<temp.length;m++) {
  console.log(temp[0][m]);
}
*/
/*
const yjunc="Eid Will Become Before Chrismass";
const modified=yjunc.replace(/Chrismass/i,"DurgaPuja");
console.log(modified);
*/
/*
const re=/apples/gi;
const str="Apples are round, and apples are juicy";
const newbee=str.replace(re,"WaterMelon");
console.log(newbee);
*/
/*
const re=/fuck/gi;
const str="Md Fuck Saad fuck";
const newStr=str.replace(re,"ashik");
console.log(newStr);
*/
/*
const re=/fuck/gi;
const str="Fuck the students fuck";
const newStr=str.replace(re,"Sakib");
console.log(newStr);
*/
/*
const re=/(\w+)\s(\w+)/;
const str="Ashik Saad";
const newStr=str.replace(re,"$2,$1");
console.log(newStr);
*/
/*
const re=/(\w+)\s(\w+)/;
const str="Ashik Saad";
const newStr=str.replace(re,"$2,$1");
console.log(newStr);
*/
/*
const re=/(\w+)\s(\w+)/;
const yfi="Natasha Malkova";
const noni=yfi.replace(re,"$2,$1");
console.log(noni);
*/
/*
const y=/(\w+)\s(\w+)/;
const yfi="Dani Daniel";
const nafi=yfi.replace(y,"$2,$1");
console.log(nafi);
*/
/*
const re=/(\w+)\s(\w+)\s(\w+)/;
const str="Saad Sakib Sadia";
const uiu=str.replace(re,"$1-$2-$3");
console.log(uiu);
*/
/*
const re=/(\w+)\s(\w+)\s(\w+)/;
const str="Sagir Atik Haydar";
const uiu=str.replace(re,"$1*$2*$3");
console.log(uiu);
*/
/*
const ml=/(\w+)\s(\w+)/;
const str="Shahadat Towsif";
const newStr=str.replace(ml,"Fuck. $1 $2");
console.log(newStr);
*/
/*
const re = /(\w)\w+\s(\w)\w+/;
const str = "Michael Jordan";
const newStr = str.replace(re, "$1.$2.");
console.log(newStr); // M.J.
*/
/*
const re=/(\w)\w+\s(\w)\w+/;
const str="Machine Learning";
const newStr=str.replace(re,"$1.$2");
console.log(newStr);
*/
/*const yf=/(\w)\w+\s(\w)\w+/;
const str="Data Science";
const master=str.replace(yf,"$1.$2");
console.log(master); */
/*
function SuffSum(arr) {
  let suffix=[];
  for(let i=(arr.length-1);i>=0;i--) {
    if(i===(arr.length-1)) {
      suffix[i]=arr[i];
    }
    else {
      suffix[i]=arr[i]+suffix[i+1];
    }
  }
  return suffix;
}
let arr=[2,4,5,7,8];
let result=SuffSum(arr);
console.log("suffix sum:",result);
console.log("Sum from index 2 to end:",result[0]);
*/
let i,j;
let num=[2,7,11,15];
let target=prompt("Input the target");
for(i=1;i<num.length;i++) {
  for(j=2;j<num.length;j++) {
    if(num[i]+num[j]==target) {
      break;
    }
  }
}
console.log(i,j);

