const {Actions} = require('../utils/Actions.js')

function test1(){
Actions.visitURL('www.amazon.com')
.then(() => Actions.login('TechGlobal', 'Test1234'))
.then(() => Actions.validateTitle('Anything'))
.catch(error => console.log(error))
}

test1()


async function test2(){
    try{
        await Actions.visitURL('www.amazon.com')
        await Actions.login('TechGlobal', 'Test1234')
        await Actions.validateTitle('Anything')
    }catch(error){
        console.log(error)
    }
}
test2()

/*
1. Create a class called Actions (in utils package and in a file called as actions.js)
2. Create 3 static asynchronous functions with the details given below in this class
*/



/*
Create a function called as visitUrl()
- it takes an argument url
- it returns a Promise which will be resolved if url starts with 'www' or 'https://'
- resolve message will be 'URL visited successfully'
- the Promise will be rejected if url does not start with 'www' or 'https://' with a message 'Wrong URL'
- delay this method for 1 second for demo purposes
*/