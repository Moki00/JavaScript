// sample input:
// STDIN                    Function
// -----                    --------
// Jay                    → username = 'Jay'
// 5                      → number of operations = 5
// GiveWarning            → first operation
// GiveWarning
// SetName JayMenon
// GiveWarning
// GiveWarning            → fifth operation


//  sample output:
// User JayMenon has a warning count of 4
// ChatUser extends User: true

// Explanation:
// The initial username is 'Jay'. After the first 2 operations, the warning count is 2.
// The 3rd operation changes the username to 'JayMenon'.
class User {
    constructor(userName){
        username = userName
    }
    
    getUsername(){
        return username
    }
    
    setUsername(username){
        username = username
    }
    
}

class ChatUser {
    constructor(userName){
        username = userName
        warning = 0;
    }
    
    giveWarning(){
        warning +=1;
    }
    
    getWarningCount(){
        return warning;
    }
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const initialUsername = readLine().trim();
    const chatUserObj = new ChatUser(initialUsername);
    
    let numberOfOperations = parseInt(readLine().trim());
    while (numberOfOperations-- > 0) {
        const inputs = readLine().trim().split(' ');
        const operation = inputs[0];
        const username = inputs[1];

        switch(operation) {
            case 'GiveWarning':
                chatUserObj.giveWarning();
                break;
            case 'SetName':
                chatUserObj.setUsername(username);
                break;
            default:
                break;
        }
    }
    ws.write(`User ${chatUserObj.getUsername()} has a warning count of ${chatUserObj.getWarningCount()}\n`);
    ws.write(`ChatUser extends User: ${(chatUserObj instanceof User).toString()}`);
    ws.end();
}