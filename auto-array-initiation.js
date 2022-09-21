let wishList = [];
let stp = false;

while(!stp){
    let list = prompt('Please enter your wish list: ');
    if (list != null){
        wishList.push(list);
    }else{
        stp = true;
    }
}

for (i = 0 ; i<wishList.length; i++){
    console.log(wishList[i]);
};