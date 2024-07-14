// Event : DOMCOntentLoaded
// function : Function to run web The event occurs
window.addEventListener('DOMContentLoaded',function(e) {
    const calcBtn = document.getElementById('cal_btn');

    // Event : Click
    // Function : Function to be run on click event
    calcBtn.addEventListener('click',function(e) {
        const dob = document.getElementById('date');
        const today = new Date();
        const diff = today - new Date(dob.value);
        const totalDays = parseInt(diff/(1000*60*60*24));  
        const totalYears = parseInt(totalDays/365);
        const totalMonths = parseInt((totalDays - totalYears*365)/30);
        const days = parseInt(totalDays -(totalYears*365+totalMonths*30));
        
        // Gather elements where to display results
        const resYears = document.getElementById('block-years');
        const resMonths = document.getElementById('block-months');
        const resDays = document.getElementById('block-days');

        // Display Result
        resYears.textContent = totalYears;
        resMonths.textContent = totalMonths;
        resDays.textContent = days;
    })


})



const reset = document.getElementById("rst_btn").addEventListener("click", reload_page);
function reload_page( reset){
    window.location.reload();
}