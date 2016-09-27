var cim = {
    iranyitoszam: '1117',
    varos: 'Budapest',
    utca: 'Aasdasdasd',
    hazszam: '12',
    toString: function(){
        return this.iranyitoszam + ' ' + this.varos + ' ' + this.utca + ' ' +  this.hazszam;
    }
}

console.log(cim);
console.log(cim.toString());
cim.orszag = 'magyarorszag';

console.log(cim.orszag);