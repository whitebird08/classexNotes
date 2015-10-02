var app = require(''.helpers/app);

var should = require('should')
var supertest = require('supertest');

describe('flights', function (){
  it('should pass', function (done){
    done();
  });
  it('should not pass', function (done){
    throw 'do not pass';
    done();
  })
})