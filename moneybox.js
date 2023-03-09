function moneyBox (){
    let savedCoins=0;
    function totalCoins(coins){
        savedCoins += coins;
        console.log(`Money Box: $${savedCoins}`)
    }
    return totalCoins
}

    
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(1);
myMoneyBox(2);

const anaMoneyBox = moneyBox();
anaMoneyBox(10);
anaMoneyBox(20);
anaMoneyBox(30);

myMoneyBox(12);


