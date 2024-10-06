//Making A FunctionL
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScrip"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on the shirt "));
}
//Calling Function With By-Defalt Value
make_shirt();
//Calling a Function Now With Medium Size And Defalt Message
make_shirt("Medium");
//Calling A  Function With Small Size And Different Message
make_shirt("Small", "I Love JavaScript");
