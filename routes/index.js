module.exports = app => {
    require('./persona.routes')(app);
    require('./auth.routes')(app);
}