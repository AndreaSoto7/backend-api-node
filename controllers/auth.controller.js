exports.postRegister = async (req, res) => {
    const { email, password, nombreCompleto } = req.body;
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
    }
    const encodedPassword = sha1Encode(password);
    await createUser(email, encodedPassword, nombreCompleto);
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
};
exports.postLogin = async (req, res) => {
        const { email, password } = req.body;
        const usuario = await findUserByEmail(email);
        if (!usuario) {
            return res.status(400).json({ error: 'Usuario o contraseña incorrectas' });
        }
        const encodedPassword = sha1Encode(password);

        if (encodedPassword !== usuario.password) {
            return res.status(400).json({ error: 'Usuario o contraseña incorrectas' });
        }

        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    };