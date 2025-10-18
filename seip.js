/*
let nums=[1,2,3,4];
let i,j,k,l;
let ans=[];
for(i=0;i<nums.length;i++) {
    for(j=0,k=1,l=2;j<nums.length,k<nums.length,l<nums.length;j++,k++,l++) {
      if((i!=j)&&(i!=k)&&(i!=l)) {
        ans[i]=nums[j]*nums[k]*nums[l];
      }
    }
}
for(let m=0;m<ans.length;m++) {
console.log(ans[m]); //Eita ekta Loop chalaye Print korbo.
}
*/
/*
let nums=[2,4,5,6,7];
let i,j,k,l;
let ans=[];
for(i=0;i<nums.length;i++) {
  for(j=0;j<nums.length;j++) {
    if(i!=j) {
      for(k=0,l=(nums.length-1);k<nums.length,l>=0;k++,l--) {
        if((i!=k)&&(i!=l)) {
          if((j!=k)&&(k!=l)&&(l!=j)) {
            ans[i]=nums[j]*nums[k]*nums[l];
          }
        }
      }
    }
  }
}
console.log(ans);
*/
/*
const process=(customer)=> {
  console.log(`Processing order from customer 1`);
  let curtime=new Date().getTime();
  while(curtime+3000>=new Date().getTime());
  console.log(`Order Processed for Customer 1`);
};
console.log(`Take order from Customer 1`);
process();
console.log(`Complete Order from customer 1`);
*/
/*
const processOrder=(customer)=> {
 console.log(`Processing order for customer 1`);
 setTimeout(()=> {
  console.log(`Cooking Completed`);
 },5000);
console.log(`ordered processed for customer 1`);
};
console.log(`Take order from customer 1`);
processOrder();
console.log(`Completed order for Customer 1`);
*/
/*
function ComputePrefMult(arr) {
  const prefMult=[];
  prefMult[0]=arr[0];
  for(let i=1;i<arr.length;i++) {
    prefMult[i]=prefMult[i-1]*arr[i]
  }
  return prefMult;
}
const arr=[-1,1,0,-3,3];
const prefix=ComputePrefMult(arr);
console.log("Prefix Mult",prefix);
*/
//Find Maximum and Minimum Element in Array
/*
let num=[20,45,30,35,40];
let max=num[0];
for(let i=0;i<num.length;i++) {
  if((num[i]>max)) {
    max=num[i];
  }
}
let min=num[0];
for(let k=0;k<num.length;k++) {
  if((num[k]<min)) {
    min=num[k];
  }
}
console.log(`The Max element is =${max} and the min element is =${min}`);
*/
/*
function suffixMult(arr) {
  let suffix=[];
  for(let i=(arr.length-1);i>=0;i--) {
    if(i===(arr.length-1)) {
      suffix[i]=arr[i];
    }
    else {
      suffix[i]=arr[i]*suffix[i+1];
    }
  }
  return suffix;
}
let arr=[-1,1,0,-3,3];
let result=suffixMult(arr);
console.log("Mult from ind=",result);
*/
/*
const hasMeeting=false;
const meeting=new Promise((resolve,reject)=> {
  if(!hasMeeting) {
     const meetingDetails={
      name:"Technical Meeting",
      location:"Google Meet",
      time:"10:00 PM",
     };
      resolve(meetingDetails);
  }
  else {
      reject(new Error("Meeting Already Scheduled"));
  }
});

meeting
    .then((res)=> {
       console.log(JSON.stringify(res));
    })
    .catch((err)=> {
       console.log(err.message);
    })
  */
 /*
 console.clear();
 const makeRequest=(method,url)=> {
  const xhr=new XMLHttpRequest();
  xhr.open(method,url);
  xhr.onload=()=> {
    let data=xhr.response;
    console.log(JSON.parse(data));
  }
  xhr.onerror=()=> {
    console.log('error is here');
  }
  xhr.send();
 }
  const getData=()=> {
     makeRequest('GET','https://jsonplaceholder.typicode.com/posts/1/comments');
 }
 getData();
*/
console.clear();
const makeRequest=(method,url,data)=> {
  const xhr=new XMLHttpRequest();
  xhr.open(method,url);
  
  xhr.setRequestHeader('Content-Type','application/json');

  xhr.onload=()=> {
    let data=xhr.response;
    console.log(JSON.parse(data));
  }

  xhr.onerror=()=> {
    console.log('error is here');
  }
  xhr.send(JSON.stringify(data));
}
const getData=()=> {
  makeRequest('GET','https://jsonplaceholder.typicode.com/posts/1/comments');
}
const sendData=()=> {
  makeRequest('POST','https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
}

sendData();