const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];


names.forEach((name) => {
  console.log(name);
});


names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});


const upperCaseProvinces = provinces.map((province) => {
  return province.toUpperCase();
});
console.log(upperCaseProvinces);



const nameLengths = names.map((name) => {
  return name.length;
});
console.log(nameLengths);



const sortedProvinces = provinces.sort();
console.log(sortedProvinces);





const filteredProvinces = provinces.filter((province) => {
  return !province.includes('Cape');
});
console.log(`Remaining provinces: ${filteredProvinces.length}`);

 const hasScharacter =names.map(name => name.toLowerCase().includes('s'));

 console.log(hasScharacter)



const nameProvinceObj = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceObj);