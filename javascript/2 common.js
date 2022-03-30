

updateView()

    function updateView(){
        const page = model.app.page;
        if (page === 'menu') updatePageView();
        else if (page === 'pageOne') updatePageView();
    
    }


    function createMenu() {
        return /*html*/ `
        <div class="menuTop">
            <button class="menuButton" onclick="updatePageView()"> menu </button>
            <button class="menuButton" onclick="updatePageView()"> Hjemmesiden </button>
            <button class="menuButton" onclick="updatePageView()"> side 1 </button>
            <button class="menuButton" onclick="updatePageView()"> side 2 </button>
        </div>
        
        `
        ;
    }

    function updatePageView() {
        document.getElementById('app').innerHTML = /*html*/ `
        ${createMenu()}
        <div class="flexBoxContainer">
            <div class="leftBoxPillar"></div>
                <picture class="pictureMargin">
                    <img src="images/boxmodel.gif">
                </picture>
            <p class="firstParagraph">
                Her har jeg startetå jobbe med CSS, kunne bittelitt fra før men jobber med mengdetrenning av det jeg kan!
            </p>
            <h4 class="firstParagraph">
                dag en med å lage min egen øvelese side.
                små-fornøyd med første side, mål neste dag er å lage neste side klar.
            </h4>
            <div class="rightBoxPillar"></div>
        </div>  
        `  
        ;
    }

