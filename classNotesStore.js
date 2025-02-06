class NotesStore {
    constructor(){
        this.notes={
            active:[],
            completed:[],
            others:[]
        };
        // this.validStates = new Set(["active", "completed", "others"]);
    }
    
    addNote(state, name){
        if(!name.trim()){
            throw new Error("Name cannot be empty");
        }
        const validStates = new Set(["active", "completed", "others"]);
        if(!validStates.has(state)){
            throw new Error(`Invalid state ${state}`);
        }
        
        if (!this.notes)
        this.notes[state].push(name);
    }
    
    getNotes(state){
        const validStates = ["active", "completed", "others"];
        if(!validStates.includes(state)){
            throw new Error(`Invalid state ${state}`);
        }
        return this.notes[state];
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const obj = new NotesStore();
    const operationCount = parseInt(readLine().trim());
    
    for(let i = 1; i <= operationCount; i++) {
        const operationInfo = readLine().trim().split(' ');
        try {
            if (operationInfo[0] === 'addNote') {
                obj.addNote(operationInfo[1], operationInfo[2] || '');
            } else if (operationInfo[0] === 'getNotes') {
                const res = obj.getNotes(operationInfo[1]);
                if (res.length === 0) {
                    ws.write('No Notes\n');
                } else {
                    ws.write(`${res.join(',')}\n`);
                }
            }
        } catch (e) {
            ws.write(`${e}\n`);
        }
    }
    ws.end();
}