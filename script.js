const toggleSwitch = document.querySelector('input[type="checkbox"]');


// Theme Switch Function
function switchTheme(event){
    // console.log(event.target.checked, "Worked!");
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme );

