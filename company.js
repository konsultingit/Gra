/**
 * Created by Kacper on 08.08.2017.
 */
function Company(budget_, users_, shares_, workers_, recognition_, quality_, price_, salaries_) {
    this.budget = (typeof budget_ !== 'undefined') ?  budget_ : 1000;
    this.users = (typeof users_ !== 'undefined') ?  users_ : 0;
    this.shares = (typeof shares_ !== 'undefined') ?  shares_ : 15;
    this.workers = (typeof workers_ !== 'undefined') ?  workers_ : 10;
    this.recognition = (typeof recognition_ !== 'undefined') ?  recognition_ : 10;
    this.quality = (typeof quality_ !== 'undefined') ?  quality_ : 20;
    this.price = (typeof price_ !== 'undefined') ?  price_ : 10;
    this.salaries = (typeof salaries_ !== 'undefined') ?  salaries_ : 500;
}

var company = new Company();
