/**
 * Created by peace on 15/7/16.
 */
var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        request(app).get('/').expect('hello world', done);
    });
});