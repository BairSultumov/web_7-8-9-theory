function factorial(n){
    if(!isNaN(n))
    {
    if (n==1) return 1;
    else return n*factorial(n-1);
    }
    else return "Error"
    }
    var userNum=+prompt('Введите число для вычисления факториала');
    alert(factorial(userNum));
    