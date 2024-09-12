function validateForm() {
    var nomeInput = document.getElementById("nome");
    var emailInput = document.getElementById("email");
    var telefoneInput = document.getElementById("telefone");

    var nomeError = document.getElementById("nomeError");
    var emailError = document.getElementById("emailError");
    var telefoneError = document.getElementById("telefoneError");

    var nomeRegex = /^[a-zA-ZÀ-ú\s']+$/; // permite letras, espaços e apóstrofos
    var telefoneRegex = /^[0-9]{2} [0-9]{4,5}-[0-9]{4}$/; // formato: xx xxxx-xxxx ou xx xxxxx-xxxx
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // formato: algo@dominio.com ou algo@dominio.br

    var isValid = true;

    if (!nomeRegex.test(nomeInput.value)) {
        nomeError.textContent = "Nome inválido. Apenas letras, espaços e apóstrofos são permitidos.";
        isValid = false;
    } else {
        nomeError.textContent = "";
    }

    if (!telefoneRegex.test(telefoneInput.value)) {
        telefoneError.textContent = "Telefone inválido. Use o formato xx xxxx-xxxx ou xx xxxxx-xxxx.";
        isValid = false;
    } else {
        telefoneError.textContent = "";
    }

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Email inválido. O formato correto é: algo@dominio.com ou algo@dominio.br.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    return isValid;
}