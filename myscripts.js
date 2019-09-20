function s(v) {
    document.getElementById('ans').value = v;
}

function a(v) {
    var x = document.getElementById('ans').value;
    var n = x.toString();
    leng = n.length+1;
    document.getElementById('notch').innerHTML = 'Length:' + leng;

    if (leng > 8) {
        var f = document.createElement("STYLE");
        var t = document.createTextNode(".display {font-size: 1.5em;}");
        f.appendChild(t);
        document.head.appendChild(f);
    }else{
        var f = document.createElement("STYLE");
        var t = document.createTextNode(".display {font-size: 3em;}");
        f.appendChild(t);
        document.head.appendChild(f);
    }
     if (leng > 15) {
        var error = myObject.e();
    }   
    document.getElementById('ans').value += v;
}

function e() {
    try {
        s(eval(document.getElementById('ans').value))
    } catch (e) {
        s('Error');
    }
}