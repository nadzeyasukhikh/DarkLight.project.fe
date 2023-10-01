const nav = document.querySelector("nav");
nav.innerHTML = `

<div class="logoImg">
        <img src="images/logo.svg" alt="Image 1">
        <div class="iconNav">
        <div class="iconImg">
        <button class="iconImgIcon" >
        <img src="images/fb.svg" alt="Image 2">
        </button>
        </div>
        <div class="iconImg">
        <button class="iconImgIcon"  >
        <img src="images/tw.svg" alt="Image 3">
        </button>
        </div>
        <div class="iconImg">
        <button class="iconImgIcon" >
        <img src="images/in.svg" alt="Image 3"
        </button>
        </div>
        </div>
    </div>
    <div>
        <button class="navIcon home">Home</button>
        <button class="navIcon author">Author</button>
        <button class="navIcon companies">Companies</button>
        <button class="navIcon articles">Articles</button>
    </div>
    <div class="ordTod">
        <button class="ordTodBtn">Order Today</button>
    </div>
    
`
const footer = document.querySelector("footer");
footer.innerHTML = `
<div class="footerContainer">
<div>
<img src="images/logo.svg" alt="Image 1">
<div class="footerBtn">
<button><img src="images/footerFb.svg"</button>
<button><img src="images/footerTw.svg"</button>
<button><img src="images/footerIn.svg"</button>
<button><img src="images/footerSrch.svg"</button>
</div>
</div>
<div>
<ul>
    <li class="liText"> Explore</li>
    <li><span>...</span> Home</li>
    <li><span>...</span> About</li>
    <li><span>...</span> Articles</li>
    <li><span>...</span> Our Store</li>
    <li><span>...</span> Contact Us</li>
    
  </ul>
</div>

<div>
<ul>
    <li class="liText"> Utility Pages</li>
    <li><span>...</span> Style Guide</li>
    <li><span>...</span> 404 Not Found</li>
    <li><span>...</span> Password Protected</li>
    <li><span>...</span> Licenses</li>
    <li><span>...</span> Changelog</li>
    
  </ul>
</div>
<div>
    <p class="liText"> Keep in Touch</p>
    <div class="addressInfo">
    <div>
    <p>Address :<p/>
    </div>
    <div>
    <p> 24A Kingston St, Los Vegas<br>NC 28202, USA.</p>
    </div>
    </div>
    <div class="mailInfo">
    <div>
    <p>Mail : <p/>
    </div>
    <div>
    <p> support@pages.com</p>
    </div>
    </div>
    <div class="phoneInfo">
    <div>
    <p>Phone :<p/>
    </div>
    <div>
    <p> (+22) 123 - 4567 - 900</p>
    </div>
    </div>
</div>
</div>
`
const mainToo = document.querySelector(".mainToo")
const author = document.querySelector(".author")
const mainOne = document.querySelector(".mainOne")
const home = document.querySelector(".home")
const companies = document.querySelector(".companies")
const mainCompanies = document.querySelector(".mainCompanies")
author.addEventListener("click", () => {
    mainOne.style.display = "none";
    mainToo.style.display = "block";
    mainCompanies.style.display = "none"
})
home.addEventListener("click", () => {
    mainOne.style.display = "flex";
    mainToo.style.display = "none";
    mainCompanies.style.display = "none"
})
companies.addEventListener("click", () => {
    mainOne.style.display = "none";
    mainToo.style.display = "none";
    mainCompanies.style.display = "block"
})

