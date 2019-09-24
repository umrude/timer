// Implement an alarm clock / timer which will beep after a specified amount of time has passed.The user can specify an unlimited number of alarms using command line arguments
//process.stdout.write('\x07');
let input = process.argv;
input.splice(0, 2);
//console.log(input);

const alarm = function(nums) {
  for (let i = 0; i <= nums.length; i++) {
    let current  = nums[i] * 1;
    if (current > 1) {
      setTimeout(function() {
        process.stdout.write('\x07');
        console.log(current);
      }, current);
    }
  }
};

alarm(input);