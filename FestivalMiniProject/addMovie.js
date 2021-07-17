


// function for adding a movie to program
export function addMovieToProgram () {    
    var movieToAdd = document.getElementById('movie-dropdown-list').value;
    var toWhichProgram = document.getElementById('program-dropdown-list').value;
    //console.log('which' + movieToAdd);
    //console.log(' to' + toWhichProgram);
    listOfCreatedMovies.forEach(function (movieObjectElement) {
        //console.log(movieObjectElement.getData())
        if (movieObjectElement.getData() === movieToAdd) {
            var movieAdd = movieObjectElement;
            //console.log(movie);
            listOfCreatedPrograms.forEach(function (programObjectElement) {
                //console.log(programObjectElement.getDate())
                if (programObjectElement.getDate() === toWhichProgram) {
                programObjectElement.addMovie(movieAdd);
				
                // update program list info
				searchForLi = uListOfCreatedPrograms.getElementsByTagName('li');
				//console.log(searchForLi)
				searchItem = toWhichProgram;
				//console.log(searchItem)
                    for (i = 0; i < searchForLi.length; i++) {
                    var currentLi = searchForLi[i].textContent.slice(0,15)
                    //console.log('trenutni Li ' + currentLi)
                        if (searchItem === currentLi) {						
                        searchForLi[i].innerHTML = programObjectElement.getData()
                        }
                    }	
			    }
            })
        }
    })    
// console.log(listOfCreatedPrograms);    
};
