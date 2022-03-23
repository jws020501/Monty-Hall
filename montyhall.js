var cnt = 0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function testcase(){
    var car = getRandomIntInclusive(1,3)
    var pic = getRandomIntInclusive(1,3)
    var arr = new Array

    if(car==1){
        if(pic==1){
            arr[1]={"iscar":true, "ispic":true,"idx":1}
            arr[2]={"iscar":false, "ispic":false,"idx":2}
            arr[3]={"iscar":false, "ispic":false,"idx":3}
        }else if(pic==2){
            arr[1]={"iscar":true, "ispic":false,"idx":1}
            arr[2]={"iscar":false, "ispic":true,"idx":2}
            arr[3]={"iscar":false, "ispic":false,"idx":3}
        }else if(pic==3){
            arr[1]={"iscar":true, "ispic":false,"idx":1}
            arr[2]={"iscar":false, "ispic":false,"idx":2}
            arr[3]={"iscar":false, "ispic":true,"idx":3}
        }
    }else if(car==2){
        if(pic==1){
            arr[1]={"iscar":false, "ispic":true,"idx":1}
            arr[2]={"iscar":true, "ispic":false,"idx":2}
            arr[3]={"iscar":false, "ispic":false,"idx":3}
        }else if(pic==2){
            arr[1]={"iscar":false, "ispic":false,"idx":1}
            arr[2]={"iscar":true, "ispic":true,"idx":2}
            arr[3]={"iscar":false, "ispic":false,"idx":3}
        }else if(pic==3){
            arr[1]={"iscar":false, "ispic":false,"idx":1}
            arr[2]={"iscar":true, "ispic":false,"idx":2}
            arr[3]={"iscar":false, "ispic":true,"idx":3}
        }
    }else if(car==3){
        if(pic==1){
            arr[1]={"iscar":false, "ispic":true, "idx":1}
            arr[2]={"iscar":false, "ispic":false,"idx":2}
            arr[3]={"iscar":true, "ispic":false,"idx":3}
        }else if(pic==2){
            arr[1]={"iscar":false, "ispic":false,"idx":1}
            arr[2]={"iscar":false, "ispic":true,"idx":2}
            arr[3]={"iscar":true, "ispic":false,"idx":3}
        }else if(pic==3){
            arr[1]={"iscar":false, "ispic":false,"idx":1}
            arr[2]={"iscar":false, "ispic":false,"idx":2}
            arr[3]={"iscar":true, "ispic":true,"idx":3}
        }
    }

    var open = 0
    var i = 1
    for (let inn = 1; inn <= 3; inn++) {
        if(arr[i].iscar==false && arr[i].ispic==false){
            open = arr[i].idx
        }
        i++
    }

    if(open == 1){
        if(arr[2].ispic==true){
            arr[2].ispic = false
            arr[3].ispic = true
        }else if(arr[3].ispic==true){
            arr[2].ispic = true
            arr[3].ispic = false
        }
    }
    else if(open == 2){
        if(arr[1].ispic==true){
            arr[1].ispic = false
            arr[3].ispic = true
        }else if(arr[3].ispic==true){
            arr[1].ispic = true
            arr[3].ispic = false
        }
    }
    else if(open == 3){
        if(arr[1].ispic==true){
            arr[1].ispic = false
            arr[2].ispic = true
        }else if(arr[2].ispic==true){
            arr[1].ispic = true
            arr[2].ispic = false
        }
    }

    var i = 1;
    for (let inn = 1; inn <= 3; inn++) {

        if(arr[i].iscar==true && arr[i].ispic==true){
            return 1
        }
        i++
    }
}

var j = 0

for(var j = 1; j < 10000000000; j++){
    persent = 0;
    if(testcase()==1){
        cnt++
        persent = cnt/j;
    }else{
        persent = cnt/j;
    }

    if(j%5000000==0){
    console.clear()
    console.log("성공횟수: "+cnt)
    console.log("총횟수: "+j)
    console.log("성공확률: "+persent) 
} 
}
console.clear()
console.log("성공횟수: "+cnt)
console.log("총횟수: "+j)
console.log("성공확률: "+persent)   
