const $employee ={
    name:"Jax",
    id: 894567,
    hireDate:23,
    hireMonth: "Aug",
    hireYear:2001,
    departement:"Innovation",
    email: "jax@company.com",
    skills: ["ux", "HTML", "CSS", "React", "Node.js"],
    adress: {
        street: "123 Steer",
        city: "Merlot", 
    },
    selfIntro:function(){
        const introTemplate = `Hi, my name is ${this.name}. I have working in ${this.departement} since ${this.hireYear}.`
        return introTemplate
    }
    
}

const $empSection = document.getElementById("employee")
$empSection.insertAdjacentHTML("afterbegin", `<h2> Welcome ${$employee.name}!</h2>`)
$employee.departement = "Innovation and Research"
const $empInfo =`<dl>
<dt>ID</dt>
<dd>${$employee.id}</dd>
<dt> Departement </dt>
<dd>${$employee.departement}</dd>
<dt>Year Hired</dt>
<dd>${$employee.hireYear}</dd>
<dt> Email </dt>
<dd>${$employee.email}</dd>
</dl>`

$empSection.insertAdjacentHTML("beforeend",$empInfo)
const $empSkills = $employee.skills
$empSection.insertAdjacentHTML("beforeend",`<p> ${$employee.name} is skilled in ${$empSkills.join(", ")}</p>`)

$empSection.insertAdjacentHTML("beforeend",`<p>  Adress ${$employee.adress.street} lives at ${$employee.adress.street}, ${$employee.adress.city}</p>`)
$empSection.insertAdjacentHTML("beforeend",`<p> ${$employee.selfIntro()}</p>`)

console.log(Object.keys($employee))
console.log(Object.values($employee))
console.log(Object.entries($employee))

$employee.pronouns="they/them"
$empSection.insertAdjacentHTML("beforeend",`<p> ${$employee.name} uses ${$employee.pronouns} as pronouns</p>`)
