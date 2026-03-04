const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")// promise of response
        .then(res => res.json())// promise of json data
        .then(json => displayLesson(json.data))
};




const displayLesson = (lessons) => {
    // 1. get the container and empty
    const levelContainer = document.getElementById('level-container')
    // levelContainer.innerHTML = '';


    //2. get into every lesson
    for (let lesson of lessons) {

        //3. create elements

        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
         <button id:"lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-info"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
        
        `
        // 4. append Child

        levelContainer.appendChild(btnDiv);
    }


}

loadLesson();