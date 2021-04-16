
document.querySelector('#myInput').addEventListener('change', function (e) {

    console.log(e.target.value);
    console.log('this ' + document.querySelector('#myInput').value);

});


document.querySelector('#myInput').addEventListener('input', function (e) {
    console.log(e.target.value);
});



document.querySelector('#myForm').addEventListener('submit', function (e) {

    e.preventDefault();
    console.log(e.target.elements.firstName.value);

});