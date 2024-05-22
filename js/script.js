function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSpecial = document.getElementById("special").checked;

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charset = "";
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSpecial) charset += special;

    if (charset === "") {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("password").value = password;
}

function copyPassword(elementId) {
    const passwordField = document.getElementById(elementId);
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    // Optionally, provide feedback to the user
    alert("Password copied to clipboard: " + passwordField.value);
}

function encryptPassword() {
    const plainText = document.getElementById("plainText").value;
    if (plainText === "") {
        alert("Please enter text to encrypt.");
        return;
    }
    // Simple Base64 encryption
    const encryptedText = btoa(plainText);
    document.getElementById("encryptedText").value = encryptedText;
}

function decryptPassword() {
    const encryptedText = document.getElementById("decryptText").value;
    if (encryptedText === "") {
        alert("Please enter text to decrypt.");
        return;
    }
    // Simple Base64 decryption
    try {
        const decryptedText = atob(encryptedText);
        document.getElementById("decryptedText").value = decryptedText;
    } catch (e) {
        alert("Invalid encrypted text.");
    }
}