const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const beepWhen = function(time) {
  setTimeout(function() {
    process.stdout.write('\x07');
  }, time * 1000);
};

const action = (data) => {
  //1 - 9 timer
  if (data > 0 && data < 10) {
    beepWhen(data);
  }


  //exit on ctrl+c
  if (data === '\u0003') {
    process.exit();
  }

  //instant beep
  if (data === '\u0062') {
    process.stdout.write('\x07');
  }



};
stdin.on('data', action);