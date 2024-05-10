let ele = document.querySelector(".textview");
// let ele1 = document.getElementsByClassName("textview");
// console.log(ele1);
let last = 'n';

function insert(num) {
  if(typeof(num) === "number"){
    ele.value += num.toString();
    last = 'n';
  }else{
    if(last === 'n'){
      ele.value += num;
      last = "s";
    }
  }
}

function equals() {
  let ans = ele.value;
  ans = eval(ans);
  ele.value = ans;
}

function clean() {
  let ans = ele.value;
  ele.value = "";
}

function back() {
  let ans = ele.value;
  ans = ans.substring(0,ans.length-1);
  ele.value = ans;
}