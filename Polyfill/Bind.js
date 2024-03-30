


// Function.prototype.myBind = function (...args) {
//     var callback = this,
//         ctx = args.splice(1);
//     return function (...a) {
//         callback.call(args[0], ...[...ctx, ...a]);
//     }
// }

// const result2 = printName.myBind(myName, "Palia",);
// result2("India");


// Function.prototype.myBind = function (...args) {
//     var callback = this,
//         ctx = args.splice(1); // Extracting the context from the arguments array
//     return function (...a) {
//         // Calling the original function with the bound context and additional arguments
//         callback.apply(args[0], ctx.concat(a));
//     }
// }

Function.prototype.myBind = function (...args) {

    let callback = this;
    ctx = args.splice(1)

    return function (...a){
        callback.apply(args[0],ctx.concat(a))
    }
}