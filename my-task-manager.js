// in your terminal, this should be the output :
// Welcome to your task manager, Press:
// 1. to see all your tasks
// 2. to add a task
// 3. to delete a task
// 4. to mark a task as done
// 5. to Exit the task manager"

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a ="Welcome to your task manager, Press:"
let b ="1. to see all your tasks"  
let c ="2. to add a task"
let d ="3. to delete a task"
let e ="4. to mark a task as done"
let f ="5. to Exit the task manager"
let listTasks = ["Eat", "Sleep", "Drink"]

const menu = () => {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)

    rl.question("Enter your number ", nbr =>{
        if(nbr === "1"){
            console.log(listTasks)
            menu()
        }else if (nbr === "2"){
            rl.question("Which task do you want to add ? ", task => {
                listTasks.push(task)
                console.log("Your task has been added to the list");  
                menu()
})
        }
    })
}
menu();

// const task =() => {
//     console.log(listTasks[0]) 
//     console.log(listTasks[1])
//     console.log(listTasks[2])
// }
// task()


// let array = ["1. to see all your tasks", "2. to add a task", "3. to delete a task", "4. to mark a task as done", "5. to Exit the task manager"]
//     const printArray = (array) => {
       
//     }
//     console.log(array)

