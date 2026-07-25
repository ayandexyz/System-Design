abstract class Chat {
    protected readonly id: string;
    protected readonly members: User[];
    protected readonly messages: Message[];

    constructor() {
        this.id = uuidv4();
        this.members = [];
        this.messages = [];
    }

    getId(): string {
        return this.id;
    }

    getMembers(): User[] {
        return [...this.members]; // Return a copy
    }

    getMessages(): Message[] {
        return [...this.messages]; // Return a copy
    }

    addMessage(message: Message): void {
        this.messages.push(message);
    }

    abstract getName(perspectiveUser: User): string;
}