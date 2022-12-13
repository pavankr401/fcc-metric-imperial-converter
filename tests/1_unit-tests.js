const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('#check whole numbers', function(){
    assert.equal(2, convertHandler.getNum("2kg"));
  })
  test('#check decimal number', function(){
    assert.equal(5.3, convertHandler.getNum("5.3kg"));
  })
  test('#check fraction', function(){
    assert.equal(0.5, convertHandler.getNum("1/2kg"));
  })
  test('#check fraction with decimal', function(){
    assert.equal(1, convertHandler.getNum("4.5/4.5kg"));
  })
  test('#check double-fraction', function(){
    assert.isUndefined(convertHandler.getNum("3/2/3kg"));
  })
  test('#check with no numeric input', function(){
    assert.equal(1, convertHandler.getNum("kg"));
  })

  let units = ['kg', 'lbs', 'mi', 'L', 'gal', 'km'];

  test("#check each valid input", function(){
    assert.include(units, convertHandler.getUnit('5kg'));
    assert.include(units, convertHandler.getUnit('5lbs'));
    assert.include(units, convertHandler.getUnit('5mi'));
    assert.include(units, convertHandler.getUnit('5L'));
    assert.include(units, convertHandler.getUnit('5gal'));
    assert.include(units, convertHandler.getUnit('5km'));
  })

  test("#check invalid input", function(){
    assert.notInclude(units, convertHandler.getUnit("1kilo"));
    assert.notInclude(units, convertHandler.getUnit("5gallons"));
  })

  test("#check return unit", function(){
    assert.deepEqual('L', convertHandler.getReturnUnit('gal'));
  })

  test("#check the spell out string", function(){
    assert.equal('kilograms', convertHandler.spellOutUnit('kg'));
    assert.equal('pounds', convertHandler.spellOutUnit('lbs'));
    assert.equal('miles', convertHandler.spellOutUnit('mi'));
    assert.equal('liters', convertHandler.spellOutUnit('L'));
    assert.equal('galloons', convertHandler.spellOutUnit('gal'));
    assert.equal('kilometers', convertHandler.spellOutUnit('km'));
  })

  test("#check galToL", function(){
    assert.equal(3.78541, convertHandler.convert("1", "gal"));
  })

  test("#check LtoGal", function(){
    assert.equal(0.26417, convertHandler.convert("1", "l"));
  })

  test("#check miTokm", function(){
    assert.equal(1.60934, convertHandler.convert("1", "mi"));
  })

  test("#check kmTomi", function(){
    assert.equal(0.62137, convertHandler.convert("1", "km"));
  })

  test("#check lbsTokg", function(){
    assert.equal(0.45359, convertHandler.convert("1", "lbs"));
  })

  test("#check kgTolbs", function(){
    assert.equal(2.20462, convertHandler.convert("1", "kg"));
  })

});