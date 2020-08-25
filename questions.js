const qs =[
  "Do you have a dog?",
  "What's your dog's favorite toy?",
  "What game do you play with him?"
]

const ask=(i=0)=>{
  process.stdout.write(`\n\n\n ${qs[i]}`);
  process.stdout.write(`>`);
};
ask();

const answers=[];
process.stdin.on("data", data=>{
  answers.push(data.toString().trim());

  if(answers.length<qs.length){
    ask(answers.length);
  }else{
    process.exit()
  }
});

process.on("exit",()=>{
  const[dog,toy,game]=answers;
  console.log(`

Go play ${toy} with ${dog} and then kickass with ${game}
  `)
})