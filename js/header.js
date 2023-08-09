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

    document.getElementById('dark-mode').addEventListener('click',()=>{
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
        }
    })
}