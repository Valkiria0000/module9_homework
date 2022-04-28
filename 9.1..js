const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;


const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
let result = [];

studentNode.forEach( student  => {
   
const nameNode  = student.querySelector("name");
const firstNode = student.querySelector("first");
const secondNode = student.querySelector("second");
const ageNode  = student.querySelector("age");
const profNode  = student.querySelector("prof");
const attrLang = nameNode.getAttribute("lang");
 
 student = {
   name: firstNode.textContent + " " + secondNode.textContent,
   age:  Number(ageNode.textContent),
   prof:  profNode.textContent,
   lang: attrLang,
   };
   result.push(student);
})
console.log('result', result);
