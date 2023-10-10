// Code your solution here

function findMatching(drivers,name)

{
  const themate=drivers.filter((driver)=>
  
  {
    return driver.toLowerCase()===name.toLowerCase()
  })
  return themate
}


function fuzzyMatch(drivers,name)

{
  const lettersMatching=drivers.filter((driver)=>
  
  {
    return driver.slice(0,name.length)===name
  })
  return lettersMatching
}



const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];


function matchName(drivers,name)
{
const matchedDrivers=drivers.filter((driver)=>
{
  return driver.name==='Bobby'
})
return matchedDrivers
}
