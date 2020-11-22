export class Cliente{
    nome: string;
    cpf: string;
    email: string;

    constructor(){
        this.nome = "";
        this.cpf = "";
        this.email = "";

    }

    clone(): Cliente{
        var cliente: Cliente = new Cliente;
        cliente.nome = this.nome;
        cliente.cpf = this.cpf;
        cliente.email = this.email;

        return cliente;

    }


}