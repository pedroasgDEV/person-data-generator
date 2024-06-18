class Cpf {
    //Atributes
    cpf = "NOCPF";
    description = "NODESCRIPTION"

    //Methods
	constructor(cpf = "NOCPF") {
        if(cpf == "NOCPF" ) {
            this.cpf = this.generateCPF();
        }
        else this.cpf = cpf;
        this.description = this.toString();
    }

    generateCPF() {
        let cpf = [];
        for (let i = 0; i < 9; i++) {
            cpf.push(Math.floor(Math.random() * 10));
        }
        cpf.push(this.calculateDigit(cpf));
        cpf.push(this.calculateDigit(cpf));
        return cpf.join('');
    }

    calculateDigit(cpf) {
        let length = cpf.length;
        let sum = 0;
        for (let i = 0; i < length; i++) {
            sum += cpf[i] * (length + 1 - i);
        }
        let remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }

    toString() {
        return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
}

exports.Cpf = Cpf;