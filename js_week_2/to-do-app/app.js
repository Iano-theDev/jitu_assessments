#!/usr/bin/node
const inputTask = document.getElementById("textbox");
const addButton = document.getElementById('add_button')
const wordsList = document.getElementById('task_list')

addButton.addEventListener('click',() => {
    let listArray = []
    let taskArray = listArray.unshift(inputTask.value)
    console.log(taskArray)

    wordsList.innerHTML += `<li>${inputWord.value}</li>`;
})

