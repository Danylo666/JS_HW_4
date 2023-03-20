let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    alert("click");
});

btn.addEventListener('mouseover', () => {
    document.getElementById('par').innerHTML = "on me";
});

btn.addEventListener('mouseout', () => {
    document.getElementById('par').innerHTML = "out me";
});