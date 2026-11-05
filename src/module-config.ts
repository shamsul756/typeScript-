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
// ex of any (top types)
let helloWorld : any = "hello";

helloWorld =`323bas` ;

// instance of unknown 

let something: unknown = "hello";
const num: number = 123;
something = num;

// ex of nullish type 

interface user {
  name : string
}

type loggedInUser = user | null;

const currentUser : loggedInUser = null;

// bottom type ex 

const getError = (msg: string) : never =>{
  throw new Error(msg)
}

const x: string= `2222222`;

// type assertion as syntax 

type Status = "pending" | "approved" | "rejected";

const someStatus: string = "pending";

const showStatus = (status: Status)=>{
  console.log("your status will be " + status);
}
showStatus(someStatus as status)

// non-null assertion 

interface Config {
  port ? : number;
}

const config: Config= {
  port : 5000
}

const currentPort: number = config.port!;

// constent assertion 

const configuration = {
  port : 8080,
  prefix: "./script.ts"
}as const ;






