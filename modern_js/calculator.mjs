// default export => module.export => only for single function that has to be exported

// const add = (a, b) => {
//     return a + b;
//  };

//  export default add;
 
 // named export => module.export.<function_name> => for multiple functions that has to be exported
 
export const add = (a, b) => {
    return a + b;
 };

export const sub = (a, b) => {
    return a - b;
 };

 
 //shortcut
 
//  exports.add = add;
//  exports.sub = sub;
 