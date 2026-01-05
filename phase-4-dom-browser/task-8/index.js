// TASK-8 Module Pattern(IIFE)
// UserStore module(IIFE) ke liye
const UserStore = (function () {
  const users = [];
  function addUser(user) {
    users.push(user);
  }
  function getUser() {
    return users;
  }
  return { addUser, getUser };
})();
UserStore.addUser({ id: 1, name: "krishna" });
UserStore.addUser({ id: 2, name: "Keshav" });
console.log(UserStore.getUser());
