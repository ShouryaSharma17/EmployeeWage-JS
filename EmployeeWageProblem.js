console.log("welcome to employee wage computation problem");
//UC1 Employee is present or absent
let checkForEmployeePresence= Math.floor((Math.random()*10)%2);
const IS_ABSENT=0;
if(checkForEmployeePresence==IS_ABSENT)
{
    console.log("employee is absent");
}
else
{
    console.log("employee is present");
}
//UC2
console.log("UC2");
const WAGE_PER_HOUR=20;
let emp_hours=0;
let employeePresence= Math.floor((Math.random()*10)%3);
switch(employeePresence)
{
    case 1:
        console.log("PART TIME");
        emp_hours=4;
        break;
    case 2:
        console.log("FULL TIME");
        emp_hours=8;
        break;
    default:
        console.log("ABSENT");
        break;
}
let employeeWage= WAGE_PER_HOUR*emp_hours;
console.log(employeeWage);
//UC2 Calculate Employee Wage
console.log("UC2");
const WAGE_PER_HOUR=20;
let emp_hours=0;
let employeePresence= Math.floor((Math.random()*10)%3);
switch(employeePresence)
{
    case 1:
        console.log("PART TIME");
        emp_hours=4;
        break;
    case 2:
        console.log("FULL TIME");
        emp_hours=8;
        break;
    default:
        console.log("ABSENT");
        break;
}
let employeeWage= WAGE_PER_HOUR*emp_hours;
console.log(employeeWage);
//UC3 Refactor by writing functions to get working hours 
console.log("Refractor UC2 to Write Functions");  
    function getWorkingHrs(empCheck)
    {
        switch(empCheck)
        {
            case 1:       
                return PART_TIME_HRS;
                
            case 2:      
                 return Full_TIME_HRS;           
            default:
                return 0;        
    
        }
    }
    let empCheck= Math.floor((Math.random()*10)%3);
    let empHrs=getWorkingHrs(empCheck);
    console.log("empWage For UC3: "+WAGE_PER_HOUR*emp_hours);
    //UC4 Calculate Wages For Month
    const NUM_OF_WORKING_DAYS=20;
    let totalWorkinghrs=0;
    for(let day=0;day<=NUM_OF_WORKING_DAYS;day++)
    {
        let empCheck= Math.floor((Math.random()*10)%3);
        totalWorkinghrs+=getWorkingHrs(empCheck); 
    }
    employeeWage= totalWorkinghrs*WAGE_PER_HOUR;
    console.log("EmployeeWage for month is: "+ employeeWage);
    //UC5 Calculate work hours
    console.log("Total work Hrs Less Than 100 or Total work days less than 20");
    const MAX_WORKING_HOURS=160;
    let totalWorkingDays=0;
    let totalEmpHrs=0;
    while(totalEmpHrs<MAX_WORKING_HOURS && totalWorkingDays<NUM_OF_WORKING_DAYS)//Condition
    {
        totalWorkingDays++;
        empCheck= Math.floor((Math.random()*10)%3);
        totalEmpHrs+=getWorkingHrs(empCheck); ;
    }
    console.log("Total working days: "+totalWorkingDays +" Total Wage: "+ totalEmpHrs*WAGE_PER_HOUR);
    //UC6 Store daily and total wage of employee
    function calculateDailyWage(empHrs)
    {
        return empHrs*WAGE_PER_HOUR;
    }
    console.log("Employee Wages are: ",empDailyWageArray);
    //UC 7A - Calculate total wage using traversal and reduce methods
totalEmpWage=0;
function sum(dailyWage)
{
    totalEmpWage+=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC 7A - Emp wage with foreach: "+totalEmpWage);
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
console.log("Emp wage with reduce: "+empDailyWageArray.reduce(totalWages,0));

//UC 7B - Show the Day along with Daily Wage using Array map helper function
let dailyCntr=0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr+" = "+dailyWage;
}
console.log("UC 7B - Daily wage map: ");
let mapDayWithWageArr=empDailyWageArray.map(mapDayWithWage);
console.log(mapDayWithWageArr);

//UC 7C - Show Days when Full time wage of 160 were earned using filter function
function fullTimeWage(dailyWage)
{
    return dailyWage.includes('160');
}
console.log("UC 7C - Daily wage filter when full time wage earned:");
let fullDayWageArr=mapDayWithWageArr.filter(fullTimeWage);
console.log(fullDayWageArr);

//UC 7D - Find the first occurrence when Full Time Wage was earned using find function
console.log("UC 7D - First time full time wage was earned on Day: "+ mapDayWithWageArr.find(fullTimeWage));

//UC 7E - Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes('160');
}
console.log("UC 7E - Check all elements have full time wage: "+fullDayWageArr.every(isAllFullTimeWage))

//UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes('80');
}
console.log("UC 7F - Check if any part time wage is present: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage)
{
    if(dailyWage>0)
    return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of days employee worked: "+empDailyWageArray.reduce(totalDaysWorked,0));
//UC8 Use Map Function
console.log("UC 8 - Contents of the map:")
console.log(empDailyWageMap);
console.log("Total wage using emp wage map: "+Array.from(empDailyWageMap.values()).reduce(totalWages));