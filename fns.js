const fns = {
    sum,
    res,
    mul,
    div,
    pow,
};

function sum(a, b) {
    return a + b;
}

// Completar estas funciones

function res(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b){
    b!=0 ? (resu = a/b) : (resu="Error: div by 0")
    return resu 
}

function pow(a, b) {}

module.exports = fns;
