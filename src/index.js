module.exports = function solveEquation(equation) {

    var eq2 = equation.replace(/ /g, '');
    var eq = eq2.split('*x^2');
    var a = parseInt(eq[0]);
    var b = parseInt(eq[1].split('*x')[0]);
    var c = parseInt(eq[1].split('*x')[1]);

    var dis = Math.pow(b, 2) - 4 * a * c;

    var x1 = Math.round((-b + Math.sqrt(dis)) / (2 * a));
    var x2 = Math.round((-b - Math.sqrt(dis)) / (2 * a));
    if (x1 >= x2) {
        return [x2, x1]
    } else {
        return [x1, x2]
    }

}
