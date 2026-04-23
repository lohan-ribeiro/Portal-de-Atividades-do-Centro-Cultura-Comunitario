/* função para validar email a partir da ordem do caracteres. Não ideal, mas evita digitar qualquer coisa no email */
export const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};