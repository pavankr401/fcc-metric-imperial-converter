function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.split(/[a-zA-Z]+/)[0];

    if(result == "") return 1;
    if(/[/]/.test(result)){
      if( result.match(/[/]/g).length != 1 ) return undefined;
      
      result = result.split("/");
      result = Number(result[0])/Number(result[1]);
      result = String(result);
      console.log(result);
      result = Number(result.match(/\d+[.]?\d{0,5}/)[0]); 
      
    }
    
    return result;
  };
  
  this.getUnit = function(input) {

    let result = input.replace(/[^a-zA-Z]+/, ""); 
    if(result.toUpperCase() == 'L') return 'L';
    
    return result.toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    if(initUnit.toLowerCase() == 'gal') result = 'L';
    else if(initUnit.toLowerCase() == 'l') result = 'gal';
    else if(initUnit.toLowerCase() == 'lbs') result = 'kg';
    else if(initUnit.toLowerCase() == 'kg') result = 'lbs';
    else if(initUnit.toLowerCase() == 'mi') result = 'km';
    else if(initUnit.toLowerCase() == 'km') result = 'mi';
    else return undefined;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    if(unit.toLowerCase() == 'gal') result = 'galloons';
    else if(unit.toLowerCase() == 'l') result = 'liters';
    else if(unit.toLowerCase() == 'lbs') result = 'pounds';
    else if(unit.toLowerCase() == 'kg') result = 'kilograms';
    else if(unit.toLowerCase() == 'mi') result = 'miles';
    else if(unit.toLowerCase() == 'km') result = 'kilometers';
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if(initUnit.toLowerCase() == 'gal') result = initNum * galToL;
    else if(initUnit.toLowerCase() == 'l') result = initNum / galToL;
    else if(initUnit.toLowerCase() == 'lbs') result = initNum * lbsToKg;
    else if(initUnit.toLowerCase() == 'kg') result = initNum / lbsToKg;
    else if(initUnit.toLowerCase() == 'mi') result = initNum * miToKm;
    else if(initUnit.toLowerCase() == 'km') result = initNum / miToKm;
    else return undefined
    
    return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
