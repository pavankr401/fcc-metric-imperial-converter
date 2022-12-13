'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  
  app.route('/api/convert').get((req, res) => {
    let input, initNum, initUnit, returnNum, returnUnit;

    input = req.query.input;
    // for blank space input
    if(/^ +$/.test(input)) return res.send("invalid number and unit");

    initNum = convertHandler.getNum(input);
    initUnit = convertHandler.getUnit(input);
    returnNum = convertHandler.convert(initNum, initUnit);
    returnUnit = convertHandler.getReturnUnit(initUnit);

    if(initNum == undefined && returnUnit == undefined) return res.send("invalid number and unit");
    if(initNum == undefined) return res.send("invalid number");
    if(initUnit == undefined) return res.send("invalid unit");
    

    if(returnUnit != undefined && returnNum != undefined){
      let result = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      res.send({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: result
      })
    }
    else res.send("invalid unit");
    
  })

};
