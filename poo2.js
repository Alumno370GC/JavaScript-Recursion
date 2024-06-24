var hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  var name   = hero.name;
  var realName = hero.realName;
  
  console.log(name);     // => 'Batman',
  console.log(realName); // => 'Bruce Wayne'

///**************

const hero ={
name: 'Batman',
realName: 'Bruce Wayne'

};

const {name, realName} = hero;

console.log(name);
console.log(realName);