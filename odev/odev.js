console.log("SORU 1")

function findPrime(...numbers) {

for (let i=0; i<numbers.length;i++){

    let kontrol=0;

// Negatif sayı / 0 ve 1 saysının kontrolü yapıldı
if (numbers[i]==0 || numbers[i]==1 || numbers[i]<0){
    console.log(numbers[i]+" Asal Değildir")


}else {

    for(let j=2; j<numbers[i];j++){
if(numbers[i]% j==0){
    kontrol++;     
console.log("       Bölündüğü Sayılar "+j)
console.log("       gelensayı "+numbers[i])    }

}
// Sayıyı 
if (kontrol !=0){
    console.log(numbers[i]+ " Asal Sayı Değildir "+" Bu kadar sayı bölüyor "+ kontrol +" adet")
    
}
else {
    console.log(numbers[i]+ " ASAL sayıdır " )
  
}}}}
findPrime(-1,0,1,2,3,4,5,77,79,88,99,100)
//---------------------------

console.log("-------SORU 2")

function friendNumber(number1,number2){
let number1Total=0;
let number2Total=0;

for (let i=0; i<number1;i++){
    if (number1% i==0){
        number1Total=number1Total+i;
        
    }
}
console.log(number1Total)

for (let i=0; i<number2;i++){
    if (number2% i==0){
        number2Total=number2Total+i;
    }
}
console.log(number2Total)
if (number1==number2Total && number2==number1Total){
    console.log(number1 + " ve "+number2+ " arkadaş sayılardır")
}
else{
    console.log(number1+ " ve "+number2+" ARKADAŞ Değillerdir.")
}

}
friendNumber(12,36)

console.log("------SORU3")

function isPerfectNumber() {
  
    for (let i = 0; i < 1000; i++) {

        let toplam = 0

        for(let j = 0; j < i; j++){
            if(i % j == 0){
                toplam = toplam + j;
            }     
        }
                            
        if(toplam == i){
            console.log(i+" mükemmel sayıdır")
        }
    }
}
isPerfectNumber()


console.log("------SORU4")

function asalSayilar(){

for (let number=1; number<1000;number++){

let asalToplam=0;
for (let i=2; i<number;i++){
    if(number% i==0){
        asalToplam++;
    }
}
if (asalToplam==0){
    console.log(number+" Asal Sayıdır")
}

}


}
asalSayilar()