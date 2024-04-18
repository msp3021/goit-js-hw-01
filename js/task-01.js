function makeTransaction(quantity, pricePerDroid){
    const totalPrize = qunatity * pricePerDroid;
    console.log(`"You ordered ${quantity} droids worth ${totalPrize} credits!"`)

};
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));