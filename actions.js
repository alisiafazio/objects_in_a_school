function listItems(){
    var value = document.getElementById("categories").value;
    if(value == 0){
        listStudents();
    }
    if(value == 1){
        listTeachers();
    }
    if(value == 2){
        listSections();
    }
}
function listTeachers(){
    var listOutput = "<table border = 1>";
    for (var i = 0; i <allTeachers.length; i++){
        listOutput += "<tr>";
        listOutput += "<td>" + allTeachers[i].firstName + "</td>";
        listOutput += "<td>" + allTeachers[i].lastName + "</td>";
        listOutput += "<td>" + allTeachers[i].subject + "</td>";
        listOutput += "</tr>";
    }
    listOutput += "</table>";
    document.getElementById("listOutput").innerHTML = listOutput;
}
function listStudents(){
    var listOutput = "<table border = 1>";
    for (var i = 0; i <allStudents.length; i++){
        listOutput += "<tr>";
        listOutput += "<td>" + allStudents[i].firstName + "</td>";
        listOutput += "<td>" + allStudents[i].lastName + "</td>";
        listOutput += "<td>" + allStudents[i].grade + "</td>";
        listOutput += "</tr>";
    }
    listOutput += "</table>";
    document.getElementById("listOutput").innerHTML = listOutput;
}
function listSections(){
    var listOutput = "<table border = 1>";
    for (var i = 0; i < allSections.length; i++){
        listOutput += "<tr>";
        listOutput += "<td>" + allSections[i].name + "</td>";
        listOutput += "<td>" + allSections[i].currentSize + "</td>";
        listOutput += "</tr>";
    }
    listOutput += "</table>";
    document.getElementById("listOutput").innerHTML = listOutput;
}
function setUp(){
    buildStudentSelection();
    buildTeacherSelection();
    buildSectionSelection();
    buildSectionOfSelections();
    buildSelectionList();
}
function buildStudentSelection(){
    document.getElementById("studentList").innerHTML = "";
    var studentList = "<option> Select Student </option>";
    for (var i = 0; i < allStudents.length; i++){
        studentList += "<option value ='" +  allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>"
    }
    document.getElementById("studentList").innerHTML += studentList;
}
function buildTeacherSelection(){
    document.getElementById("teacherList").innerHTML = "";
    var teacherList = "<option> Select Teacher </option>";
    for (var i = 0; i < allTeachers.length; i++){
        teacherList += "<option value ='" +  allTeachers[i].id + "'>" + allTeachers[i].firstName + " " + allTeachers[i].lastName + "</option>"
    }
    document.getElementById("teacherList").innerHTML += teacherList;
}
function buildSectionSelection(){
    document.getElementById("sectionList").innerHTML = "";
    var sectionList = "<option> Select Section </option>";
    for (var i = 0; i < allSections.length; i++){
        sectionList += "<option value ='" +  allSections[i].id + "'>" + allSections[i].name + "</option>"
    }
    document.getElementById("sectionList").innerHTML += sectionList;
}
function buildSectionOfSelections(){
    document.getElementById("listSection").innerHTML = "";
    var sectionList = "<option> Select Section </option>";
    for (var i = 0; i < allSections.length; i++){
        sectionList += "<option value ='" +  allSections[i].id + "'>" + allSections[i].name + "</option>"
    }
    document.getElementById("listSection").innerHTML += sectionList;
}
function addStudent(){
    var firstName = document.getElementById("studentFirstName").value;
    var lastName = document.getElementById("studentLastName").value;
    var grade = document.getElementById("studentGrade").value;
    allStudents.push(new Student(firstName, lastName, grade));
    document.getElementById("add").innerHTML = firstName + " " + lastName + " has been added!";
    clearBoxes();
    buildStudentSelection();
}
function addTeacher(){
    var firstName = document.getElementById("teacherFirstName").value;
    var lastName = document.getElementById("teacherLastName").value;
    var subject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(firstName, lastName, subject));
    document.getElementById("add").innerHTML = firstName + " " + lastName + " has been added!";
    clearBoxes();
    buildTeacherSelection();
}
function addSection(){
    var name = document.getElementById("sectionName").value;
    var currentSize = document.getElementById("sectionSize").value;
    allSections.push(new Section(name, currentSize));
    document.getElementById("add").innerHTML = name + " has been added!";
    clearBoxes();
    buildSectionSelection();
    buildSectionOfSelections();
}
function clearBoxes(){
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type == "text") {
            elements[i].value = "";
        }
    }
}
function getStudentById(studentId) {
    for(var i = 0; i < allStudents.length; i++){
        if(allStudents[i].id == studentId){
            return allStudents[i];
        }
    }
}
function getTeacherById(teacherId) {
    for(var i = 0; i < allTeachers.length; i++){
        if(allTeachers[i].id == teacherId){
            return allTeachers[i];
        }
    }
}
function getSectionById(sectionId) {
    for(var i = 0; i < allSections.length; i++){
        if(allSections[i].id == sectionId){
            return allSections[i];
        }
    }
}
function addStudentToSection(){
    var studentObject = getStudentById(document.getElementById("studentList").value);
    var sectionObject = getSectionById(document.getElementById("sectionList").value);
    sectionObject.students.push(studentObject);
    document.getElementById("addStudentToSection").innerHTML = studentObject.firstName + " " + studentObject.lastName + " has been added to " + sectionObject.name + "!";
}
function addTeacherToSection(){
    var teacherObject = getTeacherById(document.getElementById("teacherList").value);
    var sectionObject = getSectionById(document.getElementById("listSection").value);
    sectionObject.teacher = teacherObject;
    document.getElementById("addTeacherToSection").innerHTML = teacherObject.firstName + " " + teacherObject.lastName + " has been added to " + sectionObject.name + "!";
}
function removeStudentFromSection(){
    var studentObject = getStudentById(document.getElementById("studentList").value);
    var sectionObject = getSectionById(document.getElementById("sectionList").value);
    var students = sectionObject.students;
    for(var i = 0; i < students.length; i++){
        if (studentObject.id == students[i].id){
            students.splice(i);
        }
    }
    document.getElementById("removeStudentFromSection").innerHTML = studentObject.firstName + " " + studentObject.lastName + " has been removed from " + sectionObject.name + ".";
}
function buildSelectionList() {
    document.getElementById("itemsList").innerHTML = "";
    var itemsList = "<option>Select Item </option>";
        for (var i = 0; i < allSections.length; i++){
            itemsList += "<option value ='" +  allSections[i].id + "'>" + allSections[i].name + "</option>"
        }
    document.getElementById("itemsList").innerHTML += itemsList;
}
function listItemsInASection(){
    var section = getSectionById(document.getElementById("itemsList").value);
    var listOutput = "<table border = 1>";
        for (var i = 0; i < section.students.length; i++) {
            listOutput += "<tr>";
            listOutput += "<td>" + section.students[i].firstName + "</td>";
            listOutput += "<td>" + section.students[i].lastName + "</td>";
            listOutput += "<td>" + section.students[i].grade + "</td>";
            listOutput += "</tr>";
        }
        listOutput += "</table>";
        document.getElementById("listItems").innerHTML = listOutput;
}