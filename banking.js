
let deposit_money = 1000;
let balance = 5000;
let withdraw_amt = 3425;

function deposit(deposit_money){
    balance += deposit_money;
    console.log(`Amount of ${deposit_money} was added`);
    console.log('Current balance is:');
    view_balance();
}

function withdraw(withdraw_amt){
    if(balance-withdraw_amt < 0)
    {
        console.log(`Sorry, the balance is insufficient`);
    }
    balance -= withdraw_amt;
    console.log(`Amount of ${withdraw_amt} was borrowed`);
    console.log("Current balance is");
    view_balance();
}

function view_balance(){
    console.log(`${balance}`);
}

view_balance();
deposit(deposit_money);
withdraw(withdraw_amt);