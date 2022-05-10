const messages = [
  {
    id: "1rfzvtvrc",
    withUserId: "1",
    messages: [
      { userId: "1", id: "dsdaw8282", time: "1111", text: "dsdsd" },
      { userId: "2", id: "hdjsd787ds", time: "2222", text: "dsdsd" }
    ]
  },
  {
    id: "1rfzvfvfv34rfvtvrc",
    withUserId: "1",
    messages: [
      { userId: "1", id: "dsdaw8282", time: "1111", text: "dsdsd" },
      { userId: "2", id: "hdjsd787ds", time: "2222", text: "dsdsd" }
    ]
  }
];

const getMessage = (dialogueId: string, messageId: string) => {
  const a = messages.find((item) => item.id === dialogueId);
  if (a) {
    return a.messages.find((item) => item.id === messageId);
  } else return undefined;
};
console.warn(getMessage("1rfzvtvrc", "dsdaw8282"));

const objMessages = {
  "1": {
    "1": {
      id: "dsdaw8282",
      time: "1111",
      text: "dsdsd"
    },
    "2": {
      id: "dsdaw8282",
      time: "1111",
      text: "dsdsd"
    }
  }
};
const objMap = new Map();

objMap.set("3", {
  id: "dsdaw8282",
  time: "1111",
  text: "dsdsd"
});
console.warn(objMap.has("2"));
console.warn(objMap);
console.warn(objMap.get("3"));
const getMess = (dialogueId: string, userId: string) => {
  return objMessages[dialogueId]?.[userId].text;
};
console.log(getMess("1", "2"));
