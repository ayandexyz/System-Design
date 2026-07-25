function uuidv4(): string {
    return crypto.randomUUID();
}

class User {
    private readonly id: string;
    private readonly name: string;

    constructor(name: string) {
        this.id = uuidv4();
        this.name = name;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    onMessageReceived(message: Message, chatContext: Chat): void {
        // TODO: Print the notification line for this user when a message arrives.
        // Print exactly:
        // [Notification for <name> in chat '<chatName>'] <senderName>: <content>
        // Use chatContext.getName(this) for the chat name and message.getSender().getName() for the sender.
        console.log(`[Notification for ${this.name} in chat '${chatContext.getName(this)}'] ${message.getSender().getName()}: ${message.getContent()}`);
    }

    equals(o: any): boolean {
        if (this === o) return true;
        if (o == null || this.constructor !== o.constructor) return false;
        const user = o as User;
        return this.id === user.id;
    }

    hashCode(): number {
        return this.id.split('').reduce((hash, char) => {
            const code = char.charCodeAt(0);
            hash = ((hash << 5) - hash) + code;
            return hash & hash;
        }, 0);
    }

    toString(): string {
        return `User{id='${this.id}', name='${this.name}'}`;
    }
}