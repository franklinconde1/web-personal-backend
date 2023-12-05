function validate(email) {
        // Expresión regular para validar el formato de un correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Verifica si el correo electrónico cumple con el formato
        return emailRegex.test(email);
}

module.exports = {
    validate,
}