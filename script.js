function myFunc() {

    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("Box1").value;
    b1 = document.getElementById("Box2").value;
    b1 = document.getElementById("Box3").value;
    b1 = document.getElementById("Box4").value;
    b1 = document.getElementById("Box5").value;
    b1 = document.getElementById("Box6").value;
    b1 = document.getElementById("Box7").value;
    b1 = document.getElementById("Box8").value;
    b1 = document.getElementById("Box9").value;

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X Won!');
    }










}