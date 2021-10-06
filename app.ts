import express from 'express';

const app = express();
const port = 3000;

type Doggo = {
  name: string;
  age: number;
  hasOwner: boolean;
  size: "big" | "small";
}

const dogs: Doggo[] = [
  {
      age: 4,
      name: "Nico",
      hasOwner: true,
      size: 'big',
  },
  {
      age: 3,
      name: 'Ed',
      hasOwner: false,
      size: 'small'
  }
];

// app.get('/', (req, res) => { 
//   res.send("Lol");
// });

app.get('/', (req, res) => { 
  res.send(dogs);
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});