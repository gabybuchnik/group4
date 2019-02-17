function addField(e) {
    e.preventDefault();
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    var tdStudentName = document.createElement("td");
    var tdSubject = document.createElement("td");
    var studentName = e.target.parentElement.children[0].options[e.target.parentElement.children[0].selectedIndex].value;
    var subject = e.target.parentElement.children[1].value;
    if (subject !== "" && studentName !== "") {
        tdStudentName.innerText = studentName;
        tdSubject.innerText = subject;
        tr.appendChild(tdStudentName);
        tr.appendChild(tdSubject);
        table.appendChild(tr);
    }
}

function pullRandomRow(e) {
    e.preventDefault();
    var table = document.getElementById("table");
    var numberOfRows = table.rows.length;
    if (numberOfRows <= 1) {
        return;
    }
    var RandomRow = Math.floor(Math.random() * (numberOfRows - 1)) + 1;
    var tr = table.rows[RandomRow];
    var result = document.getElementById("result");
    result.innerText = "";
    var container = document.getElementById("container");
    var frame = document.createElement("div");
    var studentName = document.createElement("div");
    var subject = document.createElement("div");
    var btnX = document.createElement("input");
    btnX.value = "X";
    btnX.type = "submit";
    btnX.id = "btn-close"
    btnX.onclick = closeModal;
    container.style.opacity = "0.25";
    frame.id = "frame"
    frame.appendChild(btnX);
    studentName.innerText = tr.getElementsByTagName("TD")[0].innerText;
    studentName.id = "resStudentName"
    frame.appendChild(studentName);
    subject.innerText = tr.getElementsByTagName("TD")[1].innerText;
    subject.id = "resSubject";
    frame.appendChild(subject);
    result.appendChild(frame);
}

function closeModal(e) {
    e.preventDefault();
    var container = document.getElementById("container");
    this.parentNode.style.display = "none";
    container.style.opacity = "1";
}