const test = document.getElementById("main")
console.log(test)
// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes
// No editar
const clients = [{
    id: 1,
    taxNumber: '86620855',
    name: 'HECTOR ACUÑA BOLAÑOS'
},
{
    id: 2,
    taxNumber: '7317855K',
    name: 'JESUS RODRIGUEZ ALVAREZ'
},
{
    id: 3,
    taxNumber: '73826497',
    name: 'ANDRES NADAL MOLINA'
},
{
    id: 4,
    taxNumber: '88587715',
    name: 'SALVADOR ARNEDO MANRIQUEZ'
},
{
    id: 5,
    taxNumber: '94020190',
    name: 'VICTOR MANUEL ROJAS LUCAS'
},
{
    id: 6,
    taxNumber: '99804238',
    name: 'MOHAMED FERRE SAMPER'
}
];
const accounts = [{
    clientId: 6,
    bankId: 1,
    balance: 15000
},
{
    clientId: 1,
    bankId: 3,
    balance: 18000
},
{
    clientId: 5,
    bankId: 3,
    balance: 135000
},
{
    clientId: 2,
    bankId: 2,
    balance: 5600
},
{
    clientId: 3,
    bankId: 1,
    balance: 23000
},
{
    clientId: 5,
    bankId: 2,
    balance: 15000
},
{
    clientId: 3,
    bankId: 3,
    balance: 45900
},
{
    clientId: 2,
    bankId: 3,
    balance: 19000
},
{
    clientId: 4,
    bankId: 3,
    balance: 51000
},
{
    clientId: 5,
    bankId: 1,
    balance: 89000
},
{
    clientId: 1,
    bankId: 2,
    balance: 1600
},
{
    clientId: 5,
    bankId: 3,
    balance: 37500
},
{
    clientId: 6,
    bankId: 1,
    balance: 19200
},
{
    clientId: 2,
    bankId: 3,
    balance: 10000
},
{
    clientId: 3,
    bankId: 2,
    balance: 5400
},
{
    clientId: 3,
    bankId: 1,
    balance: 9000
},
{
    clientId: 4,
    bankId: 3,
    balance: 13500
},
{
    clientId: 2,
    bankId: 1,
    balance: 38200
},
{
    clientId: 5,
    bankId: 2,
    balance: 17000
},
{
    clientId: 1,
    bankId: 3,
    balance: 1000
},
{
    clientId: 5,
    bankId: 2,
    balance: 600
},
{
    clientId: 6,
    bankId: 1,
    balance: 16200
},
{
    clientId: 2,
    bankId: 2,
    balance: 10000
}
]
const banks = [{
    id: 1,
    name: 'SANTANDER'
},
{
    id: 2,
    name: 'CHILE'
},
{
    id: 3,
    name: 'ESTADO'
}
];

/*
  SECCIÓN PROBLEMAS
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
*/

// 0 Arreglo con los ids de clientes
// 1 Arreglo con los ids de clientes ordenados por rut
// 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
// 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
// 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER
// 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
// 6 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.
// 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.
// 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado. 
// Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.
class Bank {

    constructor(id,name) {
        this.name=name;
        this.id=id;
        this.clientes=[];
    }
}

class Client{
    constructor(id,taxNumber,name){
        this.id= id;
        this.taxNumber=taxNumber;
        this.name=name;
    }
}

class ListClients{
    constructor(arrClients){
        this.arrClients = arrClients;
    }

    listClientsIds(){
       return this.arrClients.map(client => client.id);
    }
    listClientsIdsSortByTaxNumber(){
        return this.arrClients.sort((clientA, clientB) => clientB.taxNumber-clientA.taxNumber).map(client => client.id);
    }
}

class Account{
    constructor(clientId, bankId,balance){
        this.clientId= clientId;
        this.bankId= bankId;
        this.balance= balance;
    }
}

class ListAccounts{
    constructor(arrClients, arrAccounts, arrBanks){
        this.arrClients = arrClients;
        this.arrAccounts = arrAccounts;
        this.arrBanks = arrBanks;
    }

    getListAccountByClient(){
        
        return this.arrClients.map(client => this.arrAccounts.filter(account => account.clientId===client.id))
    }

    sortClientsBankBalance(){
        let result=[];
        this.arrAccounts.reduce((acumulador, currentValue)=>{
            if(!acumulador[currentValue.clientId]){
                acumulador[currentValue.clientId]={
                    clientId: currentValue.clientId,
                    balance: 0
                }
                result.push(acumulador[currentValue.clientId]);
            }
            acumulador[currentValue.clientId].balance +=currentValue.balance;
            return acumulador
        },{})
        let sortedClients = result.sort((itemA,ItemB) => ItemB.balance-itemA.balance).map((item) =>{
            const clientFinded = this.arrClients.find(({id}) => id === item.clientId);
            return clientFinded.name;

        } ) 
    return sortedClients;
    }

    richClientsBalances(){
        const listFiltetered = this.arrAccounts.filter((account) => account.bankId===1)
        let result =[];
        listFiltetered.reduce((acumulador,currentValue)=>{
            if(!acumulador[currentValue.clientId]){
                acumulador[currentValue.clientId]={
                    clientId: currentValue.clientId,
                    balance: 0
                }
                result.push(acumulador[currentValue.clientId])
            }
            acumulador[currentValue.clientId].balance+=currentValue.balance;
            return acumulador
        },{})
        
        return result.sort((itemA,itemB) => itemB.balance-itemA.balance).map((item)=>item.balance);
    
    }
    banksClientsTaxNumbers(){ 

        const listResult = this.arrAccounts.reduce((acumulador,currentValue)=>{
            
           const { name } = this.arrBanks.find(({id})=> id==currentValue.bankId)
           if(!acumulador[name]){
               acumulador[name]={
                   clients:[]
               }
           }
           const { taxNumber } = this.arrClients.find(({id}) => id==currentValue.clientId)
           if(acumulador[name].clients.indexOf(taxNumber)!==0) {
            acumulador[name].clients.push(taxNumber)
           }
           return acumulador;
        },{})
        return listResult;
    }

    banksRankingByTotalBalance(){
        let result = [];
        this.arrAccounts.reduce((acumulador,currentValue) =>{
            const { bankId, balance } = currentValue;
            if(!acumulador[bankId]){
                acumulador[bankId]={
                    bankId: bankId,
                    balance: 0
                }
                result.push(acumulador[bankId]);
            }
            acumulador[bankId].balance += balance;
            return acumulador;
        },{})
        return result.sort((itemA,itemB) => itemA.balance-itemB.balance).map((item)=>item.bankId);
    }

}


/**
 * 
 * var task_names = tasks.map(function (task, index, array) {
 
    return task.name; 
 
});
 */

//constantes para crear las instancias de todas las clases
const createClients = () => clients.map(client => new Client(client.id, client.taxNumber,client.name));
const createBanks = () => banks.map(bank => new Bank(bank.id, bank.name));
const createAccounts = () => accounts.map(account => new Account(account.clientId,account.bankId, account.balance));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//creacion de clases

const accountList = new ListAccounts(clients,accounts,banks);
const clientList = new ListClients(clients);
accountList.banksRankingByTotalBalance()



//accountList.sortClientsBankBalance();

//creacion de constantes que recibiran lo retornado por los metodos de las clases para responder las preguntas del ejercicio

const richClientsBalances = () => accountList.richClientsBalances();
const sortClientsTotalBalances = () => accountList.sortClientsBankBalance();
const banksClientsTaxNumbers = () => accountList.banksClientsTaxNumbers();
const banksRankingByTotalBalance = () => accountList.banksRankingByTotalBalance()
//console.log(accountList.getListRichersSantander()[0])

const listClientsIds = () => clientList.listClientsIds();

const listClientsIdsSortByTaxNumber = () => clientList.listClientsIdsSortByTaxNumber();

const listAccountByClient = () => clients.map(client => {
    let accountsByClient=accounts.filter(account => account.clientId==client.id);
    return accountsByClient;
})

const cuentasFiltradas = accounts.filter((account) => account.clientId == 6);
//console.log(listAccountByClient());



// Impresión de soluciones. No modificar.
 //console.log('Pregunta 0');
 //console.log(listClientsIds());
 //console.log('Pregunta 1');
 //console.log(listClientsIdsSortByTaxNumber());
//console.log('Pregunta 2');
//console.log(sortClientsTotalBalances());
// console.log('Pregunta 3');
 //console.log(banksClientsTaxNumbers());
// console.log('Pregunta 4');
// console.log(richClientsBalances());
// console.log('Pregunta 5');
// console.log(banksRankingByTotalBalance());
// console.log('Pregunta 6');
// console.log(banksFidelity());
// console.log('Pregunta 7');
// console.log(banksPoorClients());
// console.log('Pregunta 8');
// console.log(newClientRanking());