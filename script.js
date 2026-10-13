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

