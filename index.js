const registrationForm = document.querySelector("#registration-form");
const content = document.querySelector(".content")
registrationForm.addEventListener('submit', function (event){
    event.preventDefault();
    
    const ourFormData = new FormData(event.target);
    const userName = ourFormData.get("firstName");
    
    content.innerHTML = `
    <h2 class="content-h2" >Congratulations! ${userName}</h2>
                <p class="content-register-p">You are on your way to become a BBQ master.</p>
                <p class="disclaimer">
                    <small>We'll never share your information without your permission</small></p>
    `

})