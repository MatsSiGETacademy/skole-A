

updateView()

    function updateView(){
        const page = model.app.page;
        if (page === 'homePage') updatePageView(homePage);
        else if (page === 'menu') updatePageView(menu);
    
    }


    function createMenu() {
        return /*html*/ `
        <div class="menuTop">
        <button class="menuButton" onclick="updatePageView()"> menu </button>
        <button class="menuButton" onclick="updatePageView()"> Hjemmesiden </button>
        <button class="menuButton" onclick="updatePageView()"> side 1 </button>
        <button class="menuButton" onclick="updatePageView()"> side 2 </button>
        </div>
        `;
    }

    function updatePageView(pageValg) {
        document.getElementById('app').innerHTML = /*html*/ `
        ${createMenu()}
        `
        
        ;
    }

