export default function generatePassword(passwordLength){
    let password = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < passwordLength; i++) {
        password += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return password;
}