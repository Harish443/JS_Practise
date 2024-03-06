function addTask() {
    var taskName = document.getElementById("taskName").value;
    var deadline = document.getElementById("deadline").value;

    if (taskName === "" || deadline === "") {
        alert("Please fill in all fields.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var taskBox = document.createElement("div");
    taskBox.className = "task-box";

    var taskNameElement = document.createElement("div");
    taskNameElement.className = "task-name";
    taskNameElement.textContent = taskName;
    taskBox.appendChild(taskNameElement);

    var taskDetailsElement = document.createElement("div");
    taskDetailsElement.className = "task-details";
    taskDetailsElement.textContent = "Deadline: " + deadline;
    taskBox.appendChild(taskDetailsElement);

    taskList.appendChild(taskBox);

    document.getElementById("taskName").value = "";
    document.getElementById("deadline").value = "";

    // Start countdown timer
    startTimer(deadline, taskDetailsElement); // Pass the task details element as an argument
}


function startTimer(deadline, element) {
    var countDownDate = new Date(deadline).getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var timerString = "";
        if (days > 0) timerString += days + "d ";
        if (hours > 0) timerString += hours + "h ";
        if (minutes > 0) timerString += minutes + "m ";
        timerString += seconds + "s";

        element.textContent = timerString; // Update timer span text content

        if (distance < 0) {
            clearInterval(x);
            element.style.color = "red"; // Change color if deadline passed
            element.textContent = "Deadline passed";
        }
    }, 1000);
}
