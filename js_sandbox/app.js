// EX 1: Crank out objects

// Data source
function* apiDataGenerator() {
  yield {
    name: 'John Doe',
    age: 32
  };
  yield {
    name: 'Jen Smith',
    age: 26
  };
  yield {
    name: 'William Johnson',
    age: 38
  }
}

const person = apiDataGenerator()
person.next().value.name
// "William Johnson"


// EX 2: Generate IDs when needed

function* createIds(){
  let i = 0
  while(true){
    yield i++
  }
}

const gen = createIds()
gen.next().value // 0
gen.next().value // 1
gen.next().value // 2
