export function getUserByName(users, userName) {
    const clearName = userName.trim().toLowerCase();
    return users.find(user => user.name.toLowerCase() === clearName);
}
