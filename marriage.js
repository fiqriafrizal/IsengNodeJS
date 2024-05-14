export class People {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.soulmates = null;
    this.marriageCheckResult = "";
  }

  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old. I am ${this.gender}.`;
  }

  relationshipStatus() {
    if (this.soulmates === null) {
      return `${this.name} have no soulmate.`;
    } else {
      return `${this.name} have a soulmate named ${this.soulmates}.`;
    }
  }

  ageUp() {
    this.age += 1; // Increment the age by 1
    return `I am ${this.age} years old.`;
  }

  // 1. Check bisa nikah dengan siapa
  checkMarriage(partner) {
    //2. Check gender cowok harus sama cewek
    if (this.gender === "male" && partner.gender === "female") {
      //3. Check umurnya, Kalo sesuai, mereka bisa nikah
      if (this.age >= 27 && partner.age >= 25) {
        this.marriageCheckResult = `${this.name} can marry ${partner.name}`;
        return true;
      }
      // Kalo tidak sesuai, mereka tidak bisa nikah
      else {
        this.marriageCheckResult = `${this.name} cannot marry ${partner.name}`;
        return false;
      }
    }
    //2. Check gender cewek harus sama cowok
    else if (this.gender === "female" && partner.gender === "male") {
      //3. Check umurnya Kalo sesuai, mereka bisa nikah
      if (this.age >= 25 && partner.age >= 27) {
        this.marriageCheckResult = `${this.name} and ${partner.name} can marry.`;
        return true;
      } else {
        this.marriageCheckResult = `${this.name} and ${partner.name} can't marry.`;
        return false;
      }
    }
    // GAY GAK BISA NIKAH
    else if (this.gender === "male" && partner.gender === "male") {
      this.marriageCheckResult = `${this.name} and ${partner.name} can't marry.`;
      return false;
    }
    // LESBI JUGA GAK BISA NIKAH
    else if (this.gender === "female" && partner.gender === "female") {
      this.marriageCheckResult = `${this.name} and ${partner.name} can't marry.`;
      return false;
    }
  }

  marriage(partner) {
    if (this.checkMarriage(partner)) {
      this.soulmates = partner.name;
      partner.soulmates = this.name;
      return `${this.name} and ${partner.name} are now married.`;
    } else {
      return `${this.name} and ${partner.name} can't marry.`;
    }
  }
}



