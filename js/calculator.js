const add = (a, b) => {
   return a + b;
};

const sub = (a, b) => {
   return a - b;
};

// default export => module.export => only for single function that has to be exported

// module.exports = add;

// named export => module.export.<function_name> => for multiple functions that has to be exported

// module.exports.add = add;
// module.exports.sub = sub;

//shortcut

exports.add = add;
exports.sub = sub;
