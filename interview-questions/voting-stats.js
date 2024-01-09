/**
 * Group ages
 * Young adults: 30 and below
 * Mid adults: [31, 44]
 * Old adults: 45 and above
 */

const voters = [
  [
    { voted: true, age: 54, name: "Alice Johnson" },
    { voted: true, age: 42, name: "James Smith" },
    { voted: false, age: 49, name: "Sophia Martinez" },
    { voted: true, age: 54, name: "Robert Davis" },
    { voted: true, age: 41, name: "Emma Wilson" },
    { voted: true, age: 48, name: "Michael Thomas" },
    { voted: true, age: 46, name: "Olivia Garcia" },
    { voted: false, age: 25, name: "Daniel Brown" },
    { voted: true, age: 28, name: "Ava Miller" },
    { voted: true, age: 53, name: "William Anderson" },
    { voted: false, age: 56, name: "Sophie Taylor" },
  ],
  [
    { voted: true, age: 18, name: "David Hernandez" },
    { voted: true, age: 74, name: "Ella Robinson" },
    { voted: true, age: 29, name: "Ethan White" },
    { voted: true, age: 47, name: "Isabella Wright" },
    { voted: false, age: 44, name: "Joseph Jackson" },
    { voted: false, age: 41, name: "Aiden Harris" },
    { voted: false, age: 51, name: "Mia Thompson" },
    { voted: true, age: 18, name: "Logan Martin" },
    { voted: false, age: 47, name: "Emily Lewis" },
    { voted: false, age: 18, name: "Madison Turner" },
    { voted: false, age: 45, name: "Chloe Adams" },
    { voted: true, age: 47, name: "Benjamin Hall" },
  ],
  [
    { voted: true, age: 27, name: "Mason Baker" },
    { voted: true, age: 32, name: "Abigail Hall" },
    { voted: true, age: 44, name: "Christopher Carter" },
    { voted: true, age: 18, name: "Harper Ward" },
    { voted: true, age: 30, name: "Grace Powell" },
    { voted: false, age: 39, name: "Liam Gonzalez" },
    { voted: true, age: 60, name: "Zoe Martinez" },
    { voted: true, age: 19, name: "Natalie Hill" },
    { voted: false, age: 18, name: "Daniel Kelly" },
    { voted: true, age: 29, name: "Aiden Brooks" },
    { voted: true, age: 27, name: "Ella Richardson" },
    { voted: true, age: 41, name: "Jackson Murphy" },
  ],
  [
    { voted: false, age: 39, name: "Lily Cooper" },
    { voted: false, age: 43, name: "Scarlett Rivera" },
    { voted: false, age: 19, name: "Landon Davis" },
    { voted: false, age: 27, name: "Zoe Turner" },
    { voted: true, age: 43, name: "Mia Howard" },
    { voted: false, age: 23, name: "Leah Parker" },
    { voted: true, age: 45, name: "Carter Evans" },
    { voted: true, age: 42, name: "Evelyn Mitchell" },
    { voted: false, age: 44, name: "Elijah Reed" },
    { voted: false, age: 31, name: "Grace Scott" },
    { voted: false, age: 34, name: "Avery Perry" },
    { voted: true, age: 37, name: "Noah Sanders" },
  ],
  [
    { voted: false, age: 38, name: "Chloe Coleman" },
    { voted: true, age: 53, name: "Lily Bennett" },
    { voted: true, age: 30, name: "Liam Roberts" },
    { voted: true, age: 53, name: "Emma Foster" },
    { voted: true, age: 18, name: "Ethan Richardson" },
    { voted: false, age: 40, name: "Aria Murphy" },
    { voted: false, age: 34, name: "Eli Wood" },
    { voted: true, age: 33, name: "Mila Gonzalez" },
    { voted: true, age: 34, name: "Lincoln Adams" },
    { voted: true, age: 37, name: "Lucy Parker" },
  ],
  [
    { voted: false, age: 36, name: "Gabriel White" },
    { voted: false, age: 47, name: "Brooklyn Collins" },
    { voted: false, age: 58, name: "Elijah Baker" },
    { voted: false, age: 18, name: "Lily Bell" },
    { voted: true, age: 32, name: "Caleb Powell" },
    { voted: true, age: 79, name: "Avery Turner" },
    { voted: false, age: 36, name: "Ava Butler" },
    { voted: false, age: 18, name: "Isaac Turner" },
    { voted: true, age: 47, name: "Luna Martinez" },
  ],
];

const flatVoters = voters.flat(1);

const initializer = {
  young: { voters: 0, total: 0 },
  mid: { voters: 0, total: 0 },
  old: { voters: 0, total: 0 },
};

const votingStats = flatVoters.reduce((accum, { age, voted }) => {
  if (age <= 30) {
    return {
      ...accum,
      young: {
        voters: voted ? accum.young.voters + 1 : accum.young.voters,
        total: accum.young.total + 1,
      },
    };
  }

  if (age > 30 && age <= 44) {
    return {
      ...accum,
      mid: {
        voters: voted ? accum.mid.voters + 1 : accum.mid.voters,
        total: accum.mid.total + 1,
      },
    };
  }

  return {
    ...accum,
    old: {
      voters: voted ? accum.old.voters + 1 : accum.old.voters,
      total: accum.old.total + 1,
    },
  };
}, initializer);

const expectedResponse = {
  young: { voters: 12, total: 20 },
  mid: { voters: 12, total: 25 },
  old: { voters: 14, total: 21 },
};
