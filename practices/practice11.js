class Customer {
    constructor(name, age, membershipType, membershipCost) {
      this.name = name;
      this.age = age;
      this.membershipType = membershipType;
      this.membershipCost = membershipCost
    }
  
    getDetails() {
      return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}`;
    }
  
    upgradeMembership(customer) {
      this.membershipType = 'Premium'
      this.membershipCost *= 1.2
    }
  }

  class VIPCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost) {
        super(name, age, membershipType, membershipCost)
    }

    applyDiscount() {
        this.membershipCost *= .9
    }
  }

  class BusinessCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost, duration) {
        super(name, age, membershipType, membershipCost)
        this.duration = duration
    }

    extendContract() {
        this.membershipCost *= .85
        this.duration++
    }

  }

  const customer1 = new Customer('John Doe', 30, 'Basic', 50)
  const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100)
  const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2)

  customer1.upgradeMembership()
  vipCustomer.applyDiscount()
  businessCustomer.extendContract()

  for (customer of [customer1, vipCustomer, businessCustomer]) {
    console.log(customer.getDetails())
  }








  