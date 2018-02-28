document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("answer").style.display = "none";

    document.getElementById("btn").addEventListener("click", (event) => {
        event.preventDefault();
        let expression = document.getElementById("input").value;

        document.getElementById("answer").innerText = "Answer is : " + calculator(expression);
        document.getElementById("answer").style.display = "block";
    })
});