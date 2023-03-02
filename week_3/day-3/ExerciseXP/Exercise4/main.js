const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

const numUsers = users.length;

if (numUsers === 0) {
  console.log("no one is online");
} else if (numUsers === 1) {
  console.log(`${users[0]} is online`);
} else if (numUsers === 2) {
  console.log(`${users[0]} and ${users[1]} are online`);
} else {
  const numAdditionalUsers = numUsers - 2;
  console.log(`${users[0]}, ${users[1]} and ${numAdditionalUsers} more are online`);
}
