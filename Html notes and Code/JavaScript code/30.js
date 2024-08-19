const names = [
  "Ritik Anand",
  "Roushan Deep",
  "Aman Kumar",
  "Ankit Singh",
  "Shivam Rajput",
];
const intials = [];
for (let i = 0; i < names.length; i++) {
  const namesparts = names[i].split(" ");
  const firstintials = namesparts[0].charAt(0);
  const lastintials = namesparts[1].charAt(0);
  intials.push(firstintials + lastintials);
}
console.log(intials);
