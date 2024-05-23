const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container'); 

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();  // Save the data after adding a new task
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();  // Save the data after toggling the task
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();  // Save the data after removing a task
    }  
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}document.addEventListener("DOMContentLoaded", showTask);  // Ensure the tasks are shown when the document is loaded

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set font size and color for the heading, and center it
    doc.setFontSize(20);
    doc.setTextColor(0, 102, 204); // Setting a blue color for the heading
    const title = "To-Do List";
    const titleWidth = doc.getTextWidth(title);
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = (pageWidth - titleWidth) / 2;
    doc.text(title, centerX, 20);

    // Set font size and color for the tasks
    doc.setFontSize(14);
    let y = 40;

    const tasks = document.querySelectorAll("#list-container li");
    tasks.forEach((task, index) => {
        let taskText = task.textContent.replace("\u00d7", "").trim();
        let prefix = `${index + 1}. `;
        
        if (task.classList.contains("checked")) {
            doc.setTextColor(0, 128, 0); // Green color for checked tasks
            taskText = prefix + " " + taskText;
        } else {
            doc.setTextColor(0, 0, 0); // Black color for unchecked tasks
            taskText = prefix + " " + taskText;
        }

        doc.text(taskText, 10, y);
        y += 10;
    });

    doc.save("todo-list.pdf");
}
