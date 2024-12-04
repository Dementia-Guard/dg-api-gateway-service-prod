import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
    let server;

    beforeAll(() => {
        // ensures the app is only started once before all tests
        server = app.listen(8457);
    });

    afterAll(() => {
        // Close the server after tests to avoid hanging processes
        server.close();
    });

    it('should return 200 OK', async () => {
        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true); // Check for success field
        expect(response.body.data.message).toBe('Gateway Service Online'); // Check the message field
    });
});
