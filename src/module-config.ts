export const greeting = () => {
  console.log("hello devloper how can i assist u ?");
};

greeting();

// ex of literal type
type status = "pending";

const status: status = "pending";

// ex of basic union type
type identity = string | number;

const id: identity = 32;

// ex of literal union
type Role = "user" | "manager" | "admin";

const access: Role = "admin";

// ex of object union

type admin = { id: number; role: "admin"; privilize: string[] };
type member = { id: number; role: "member"; plans: string[] };

const user: admin = { id: 123, role: "admin", privilize: ["apple", "juice"] };

console.log(user);

// interface ex 
interface animals {
  species: string;
}

interface Cat extends animals {
  breed: string;
}

const cat: Cat = {
  breed: "persian ",
  species: "france"
};

// type union 

type vehile ={
  brand : string;
}

type car = vehile &{
  model : "corolla"
};

const Car:car={ 
 model: "corolla",
 brand: "suv"
}



