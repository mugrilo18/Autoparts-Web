function header() {
    const headerTemplate = document.createElement('template');
    headerTemplate.innerHTML = `
        <header>
            <img src="assets/images/Logo.png">
        </header>
    `
    document.body.appendChild(headerTemplate.content);
}

function sideMenu() {
    const sideMenuTemplate = document.createElement('template');
    sideMenuTemplate.innerHTML = `
        <aside>
            <div class="section">
                <div class="navBtn" href="home.html" title="Home">
                    <i class="fa-solid fa-house"></i>
                </div>

                <div class="navBtn" href="customer.html" title="Clientes">
                    <i class="fas fa-users"></i>
                </div>

                <div class="navBtn" href="ticket.html" title="OS (Ordem de Serviço)">
                    <i class="fa-solid fa-ticket"></i>
                </div>

                <div class="navBtn" href="stock.html" title="Estoque">
                    <i class="fa-solid fa-dolly"></i>
                </div>
            </div>

            <div class="section">
                <div class="navBtn" href="user.html" title="Usuário">
                    <i class="fas fa-user"></i>
                </div>

                <div class="navBtn" title="Exit">
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </div>
        </aside>
    `
    document.getElementById('screen').appendChild(sideMenuTemplate.content);
}