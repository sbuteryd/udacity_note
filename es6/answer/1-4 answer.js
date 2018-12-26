/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here

for (const index of days){
    console.log(`${index.charAt(0).toUpperCase()}${index.slice(1)}`)
}
