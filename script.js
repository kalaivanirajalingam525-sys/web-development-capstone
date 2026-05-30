const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});