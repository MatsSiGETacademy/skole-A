

updateView()

    function updateView(){
        const page = model.app.page;
        if (page === 'homePage') updatePageView();
        else if (page === 'menu') updatePageView();
    
    }


    function createMenu() {
        return /*html*/ `
        <div class="menuTop">
        <button class="menuButton" onclick="updatePageView()"> Hjemmesiden </button>
        <button class="menuButton"> side 1 </button>
        <button class="menuButton"> side 2 </button>
        </div>
        `;
    }

    function updatePageView() {
        document.getElementById('app').innerHTML = /*html*/ `
        ${createMenu()}
        `
        
        ;
    }

    