let userInput: unknown; //better than 'any' type since it needs extra check;
let userName: string;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code: number): never { //more clear
    throw{ message: message, errorCode: code };
    // while(true){}
}

generateError('An error occured!', 500);
