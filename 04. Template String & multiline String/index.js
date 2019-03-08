// Template string & multiline string

const name = 'Sultan Mahmud';
const age = 22;
const email = 'sultan@gamil.com'

// const all = 'Name:' + name + ' Age:' 
// + age + ' Email:' + email;

const all = `
    Name:${ name }
    Age:${ age }
    Email:${ email }

`

console.log(all)  //Name:sultan Age:22 Email:Sultan Mahmud