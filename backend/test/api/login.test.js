/* eslint-disable no-underscore-dangle */
process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const request = require('supertest');

const app = require('../../server');
const conn = require('../../database/index');

describe('Login testing', () => {
  before((done) => {
    conn
      .connectMock()
      .then(() => {
        request(app)
          .post('/api/users/')
          .send({
            name: 'admin',
            email: 'root@adminRoot.com',
            password: 'rootadmintest',
            code: '0000000000',
            is_admin: true,
          })
          .then(() => {
            request(app)
              .post('/api/users/')
              .send({
                name: 'regular',
                email: 'verified@regular.com',
                password: 'rootadmintest',
                code: '0000000001',
                is_admin: false,
              })
              .then((res) => {
                request(app)
                  .patch(`/api/users/verify/${res.body.id}`)
                  .then(() => {
                    request(app)
                      .post('/api/users/')
                      .send({
                        name: 'regular',
                        email: 'unverified@regular.com',
                        password: 'rootadmintest',
                        code: '0000000002',
                        is_admin: false,
                      })
                      .then(() => done());
                  });
              });
          });
      })
      .catch((err) => done(err));
  });

  after((done) => {
    conn.clear().catch((err) => done(err));
    conn
      .close()
      .then(() => done())
      .catch((err) => done(err));
  });

  it('Admin logs in', (done) => {
    request(app)
      .post('/api/login/')
      .send({
        email: 'root@adminRoot.com',
        password: 'rootadmintest',
      })
      .then((res) => {
        const { status } = res;
        expect(status).to.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('Admin logs in error password', (done) => {
    request(app)
      .post('/api/login/')
      .send({
        email: 'root@adminRoot.com',
        password: 'rootadmintes',
      })
      .then((res) => {
        const { status, body } = res;
        expect(status).to.be.equal(400);
        expect(body.error).to.be.equal('Email or password is wrong');
        done();
      })
      .catch((err) => done(err));
  });

  it('User verified logs in', (done) => {
    request(app)
      .post('/api/login/')
      .send({
        email: 'verified@regular.com',
        password: 'rootadmintest',
      })
      .then((res) => {
        const { status } = res;
        expect(status).to.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('User verified logs in error password', (done) => {
    request(app)
      .post('/api/login/')
      .send({
        email: 'verified@regular.com',
        password: 'rootadmintes',
      })
      .then((res) => {
        const { status, body } = res;
        expect(status).to.be.equal(400);
        expect(body.error).to.be.equal('Email or password is wrong');
        done();
      })
      .catch((err) => done(err));
  });

  it("Unverified user can't log", (done) => {
    request(app)
      .post('/api/login/')
      .send({
        email: 'unverified@regular.com',
        password: 'rootadmintest',
      })
      .then((res) => {
        const { status, body } = res;
        expect(status).to.be.equal(400);
        expect(body.error).to.be.equal('The user is not verified');
        done();
      })
      .catch((err) => done(err));
  });
});
