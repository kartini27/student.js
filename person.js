class person{
    constructor(name = '',kelas = '', nim =''){
        this.name = name;
    this.kelas = kelas;
    this.nim = nim;
    }

    setName(name){
        this.name = name;
    }
    setkelas(kelas){
        this.kelas= kelas;
    }
    setnim(nim){
        this.nim= nim;
    }
    getName(){
        return this.name;
    }
    getkelas(){
        return this.kelas;
    }
    getnim(){
        return this.nim;
}
}
module.exports = person