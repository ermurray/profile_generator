const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (mealTime) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (meal) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superPower) =>{
              process.stdout.write(`${name} loves ${activity} and listening to ${music} while cooking ${mealTime}. \n ${name}'s favorite food is ${meal} and absolute favorite sport is ${sport} which they excelle at because they are ${superPower}\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
