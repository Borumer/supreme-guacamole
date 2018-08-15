'use strict';

var _employee = require('./employee');

var _employee2 = _interopRequireDefault(_employee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_employee2.default.getEmployeeInformation = function (inputSalary) {
  _employee2.default.salary = inputSalary;
  console.log('Cadre: ' + (0, _employee.getCadre)());
  console.log('Tax: ' + (0, _employee.calculateTax)());
  console.log('Benefits: ' + (0, _employee.getBenefits)());
  console.log('Bonus: ' + (0, _employee.calculateBonus)());
  console.log('Reimbursement Eligibility: ' + (0, _employee.reimbursementEligibility)() + '\n');
};

_employee2.default.getEmployeeInformation(10000);
_employee2.default.getEmployeeInformation(50000);
_employee2.default.getEmployeeInformation(100000);