var a = 1, b = 1, c, d;

c = ++a;
alert('c = ' + c); //2

d = b++;
alert('d = ' + d); //1

c = (2 + ++a);
alert('c = ' + c); //5

d = (2 + b++);
alert('d = ' + d); //4

alert('a = ' + a); //3
alert('b = ' + b); //3