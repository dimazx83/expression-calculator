function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    function mult(m){
        return m.split('*').map(i=>+i).reduce((acc,i)=>acc*i)
      }
      function division(div){
        return div.split('/').map(i=>mult(i)).reduce((acc,i)=>acc/i)
      }
      function minus(min){
        return min.split('-').map(i=>division(i)).reduce((acc,i)=>acc-i)
      }
      function sum(s){
       return s.split('+').map(i=>minus(i)).reduce((acc,i)=>acc+i);
      }
      return sum(expr)
}

module.exports = {
    expressionCalculator
}