
const names = ["Peter","Ahmed","Serag","Samy","Kero","Islam","Bassem","Abanoub","Khalil","Youssef","Nabil","Sisi","Ali","Abdo","Sliem"];
let randomIndex = Math.floor(Math.random()*names.length);
module.exports = ()=>{
    const data = {
        users:[]
    }
    for (let i = 0; i < 100; i++) {
        randomIndex = Math.floor(Math.random()*names.length);
        data.users.push({
            id:i,
            name:names[randomIndex]
        })
    }
    return data;
}