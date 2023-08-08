export default function createHeader (header, logoObj, menuList) {
    
    let logoImg = document.getElementById('logo');
    logoImg.setAttribute('src', logoObj.logoImg)
    logoImg.setAttribute('alt', logoObj.alt)
    logoImg.setAttribute('width', logoObj.width)
    logoImg.setAttribute('heigth', logoObj.heigth)
    
    let navMenu = header.querySelectorAll('.nav-link')

    menuList.forEach((menu, i = 0) => {
        navMenu[i].innerText = menu
    })
}