// function for creating a new program
export function createProgram () {
    var programDate = document.getElementById('program-date').value;
    var programObject = new Program(programDate);
    listOfCreatedPrograms.push(programObject);
    //adding to list of programs in html
    var liProgram = document.createElement('li');
    liProgram.textContent = programObject.getData();    
    uListOfCreatedPrograms.appendChild(liProgram);
    //adding program select option in html 
    var programOption = document.createElement('option');
    programOption.textContent = programObject.getData();
    programOption.setAttribute('value', programObject.getDate());
    selectProgramList.appendChild(programOption);
};
