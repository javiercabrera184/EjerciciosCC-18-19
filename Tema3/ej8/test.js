var request = require('supertest');
	app=require("./app.js");
	
	describe( "PUT ej3", function() {
		it('should create', function (done) {
		request(app)
			.put('/2/2/4')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200,done);
		});
	});
	describe( "GET ej3", function() {
		it('should say hello world', function (done) {
		request(app)
			.get('/')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect("Hello World!",done);
		});
	});