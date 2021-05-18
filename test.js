const { rawListerners } = require('process');
const readline = require('readline');
let pizza = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pizzaFlavor = [];
const menu = () => {
    pizza.question(`-1 list all your flavor\n-2 Add a new flavor\n-3 remove a flavor\n-4 Exite this program\n Enter your number`, function(numChoice) {
        let num = parseInt(numChoice);
        switch (num) {
            case 1:
                console.log(pizzaFlavor);
                menu();
                break;
            case 2:
                pizza.question(Enter a flavor :, function(add) {
                    pizzaFlavor.push(add);
                    console.log(pizzaFlavor);
                    menu();
                })
                break;
            case 3: 
                pizza.question(Remove a flavor from 1 to ${pizzaFlavor.length}: , function(rem) {
                    if ( rem > 0 && rem <= pizzaFlavor.length) {
                        pizzaFlavor.splice(rem-1,1);
                        console.log(pizzaFlavor);
                        menu();
                    }
                })
                break;
            case 4:
                pizza.close();
                break;
            default:
                console.log("Choose from 1 to 4");
                menu()
             }

})
}
menu();