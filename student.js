var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["collegename"] = document.getElementById("collegename").value;
    formData["contact"] = document.getElementById("contact").value;
    formData["gender"]=document.getElementById("gender").value;


    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("student").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.collegename;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.contact;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.gender;


    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("collegename").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("gender").value = "";



}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.collegename;
    selectedRow.cells[3].innerHTML = formData.contact;
    selectedRow.cells[4].innerHTML = fromData.gender;



}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("student").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
