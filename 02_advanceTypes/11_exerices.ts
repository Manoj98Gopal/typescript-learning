type UserDetails = {
  name: string;
  age: number;
  occupation?: string;
};

let users: UserDetails[] = [
  {
    name: "John Smith",
    age: 30,
    occupation: "software engineer"
  },
  {
    name: "kate miller",
    age: 28
  }
];

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

type Days =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: Days = "Saturday";

function getUser(id: number): UserDetails | null {
  return id === 1 ? users[0] : null;
}

console.log(getUser(0)?.occupation);

let value: unknown = "a";

if (typeof value === "string") {
  console.log(value?.toUpperCase());
}
