const csv = require('csv-writer').createObjectCsvWriter
const csvReader = require('csv-parser')
const fs = require('fs')
const csvWriter = csv({
    path: 'TODO.csv',
    header: [
        {id: 'task', title:"Task"},
        {id: 'isDone', title:"Done"},
        {id: 'dueDate', title:"Due date"}
    ]
});
if (!fs.existsSync("TODO.csv")){
    fs.writeFile('TODO.csv', "");
}
function saveTodoList(){
    console.log("TODO")

    const data = [
        {
            task: 'Games',
            isDone: "false",
            dueDate: "10/10/2002"
        }
    ];

    csvWriter
  .writeRecords(data)
  .then(()=> console.log('Saved TODO list sucessfully!'));


}

function readTodoList(){
    fs.createReadStream('TODO.csv').pipe(csv()).on('data', (row) => {
        console.log(row)
    })
}

module.exports = {saveTodoList, readTodoList}