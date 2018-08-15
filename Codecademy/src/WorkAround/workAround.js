import {getCadre, calculateTax as getTax, getBenefits, calculateBonus, reimbursementEligibility} from './employee';
import Employee from './employee';

Employee.getEmployeeInformation = function(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + getTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

Employee.getEmployeeInformation(10000);
Employee.getEmployeeInformation(50000);
Employee.getEmployeeInformation(100000);