var supertest = require('supertest');
	var server = supertest.agent("http://localhost:3000");
	
	describe( "PUT ej3", function() {
		it('should create', function (done) {
		server
			.put('/2/2/4')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200,done);
		});
	});
	describe( "GET ej3", function() {
		it('should say hello world', function (done) {
		server
			.get('/')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect("Hello World!",done);
		});
	});