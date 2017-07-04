/**
 * Created by Kacper on 03.07.2017.
 */

function Case(budget_ ,users_,shares_,workers_,recognition_,quality_,price_,salaries_)
{
    this.budget = budget_;
    this.users = users_;
    this.shares = shares_;
    this.workers = workers_;
    this.recognition = recognition_;
    this.quality = quality_;
    this.price = price_;
    this.salaries = salaries_;
    this.show = function () {
        return this.budget + " " + this.users + " " + this.shares + " " + this.workers + " " + this.recognition + " " + this.quality + " " + this.price + " " + this.salaries;
    }

}

function Card(text_,budgetY,usersY,sharesY,workersY,recognitionY,qualityY,priceY,salariesY,budgetN,usersN,sharesN,workersN,recognitionN,qualityN,priceN,salariesN)
{
    this.text = text_;
    this.caseYes = new Case(budgetY,usersY,sharesY,workersY,recognitionY,qualityY,priceY,salariesY);
    this.caseNo = new Case(budgetN,usersN,sharesN,workersN,recognitionN,qualityN,priceN,salariesN);
    this.show = function(){
        return this.text + " " + this.caseYes.show() + " " + this.caseNo.show();
    }
}

//Karty

var karta = new Card("Pierwsza",0,10,20,1,10,-1,2,0,-10,-2,-100,-1,-2,-3,-5,-100);
