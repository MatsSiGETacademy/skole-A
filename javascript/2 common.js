

updateView()

    function updateView(){
        const page = model.app.page;
        if (page === 'menu') updatePageViewMenu();
        else if (page === 'pageOne') updatePageViewPageOne();
        else if (page === 'pageTwo') updatePageViewPagetwo();
    }


    function createMenu() {
        return /*html*/ `
        <div class="menuTop">
            <button class="menuButton" onclick="updatePageViewMenu()"> menu </button>
            <button class="menuButton" onclick="updatePageView()"> Hjemmesiden </button>
            <button class="menuButton" onclick="updatePageViewPageOne()"> side 1 </button>
            <button class="menuButton" onclick="updatePageViewPagetwo()"> side 2 </button>
        </div>
        
        `
        ;
    }

    function updatePageViewMenu() {
        document.getElementById('app').innerHTML = /*html*/ `
        ${createMenu()}
        <div class="flexBoxContainer">
            <div class="leftBoxPillar"></div>
                <picture class="pictureMargin">
                    <img src="images/boxmodel.gif">
                </picture>
            <p class="firstPageParagraph">
                Her har jeg startet å jobbe med CSS, kunne bittelitt fra før men jobber med mengdetrenning av det jeg kan!
            </p>
            <h4 class="firstPageParagraph">
                dag en med å lage min egen øvelese side.
                små-fornøyd med første side, mål neste dag er å lage neste side klar.
            </h4>
            <br><br><br><br><br><br><br>
            <p class="firstPageParagraph">
                function
                variabler
                if
                parameter
                return
                MVC
                array
                for loop
                objekter
            </p>

            <div class="rightBoxPillar"></div>
        </div>  
        `  
        ;
    }

