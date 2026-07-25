class Message {
    private readonly id: string;
    private readonly sender: User;
    private readonly content: string;
    private readonly timestamp: Date;

    constructor(sender: User, content: string) {
        this.id = uuidv4();
        this.sender = sender;
        this.content = content;
        this.timestamp = new Date();
    }

    getId(): string {
        return this.id;
    }

    getSender(): User {
        return this.sender;
    }

    getContent(): string {
        return this.content;
    }

    getTimestamp(): Date {
        return this.timestamp;
    }

    toString(): string {
        return `${this.sender.getName()}: ${this.content}`;
    }
}