const promptSync = require( 'prompt-sync');
const person =require('./person');

const prompt = promptSync();
const p = new person()
    const name = prompt ('siapa nama kamu?')
    p.setName(name)
    const kelas = prompt ('kamu dari kelas mana?')
    p.setKelas(kelas)
    const nim = prompt ('berapa nim mu ')
    p.setnim(nim)

    console.log(`namamu ${p.getName()} dari kelas ${p.getKelas()} berapa nim mu ${p.getnim()}`);
