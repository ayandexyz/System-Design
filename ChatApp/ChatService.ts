class ChatService {
    private readonly users: Map<string, User> = new Map();
    private readonly chats: Map<string, Chat> = new Map();

    createUser(name: string): User {
        const user = new User(name);
        this.users.set(user.getId(), user);
        return user;
    }

    createOneToOneChat(userId1: string, userId2: string): Chat {
        const user1 = this.users.get(userId1);
        const user2 = this.users.get(userId2);
        if (!user1 || !user2) {
            throw new Error("One or both users not found");
        }
        const chat = new OneToOneChat(user1, user2);
        this.chats.set(chat.getId(), chat);
        return chat;
    }

    createGroupChat(name: string, memberIds: string[]): Chat {
        const members: User[] = [];
        for (const memberId of memberIds) {
            const user = this.users.get(memberId);
            if (user) {
                members.push(user);
            }
        }
        const chat = new GroupChat(name, members);
        this.chats.set(chat.getId(), chat);
        return chat;
    }

    sendMessage(senderId: string, chatId: string, messageContent: string): void {
        const sender = this.users.get(senderId);
        const chat = this.chats.get(chatId);
        if (!chat) {
            console.error("Error: Chat not found with ID: " + chatId);
            return;
        }

        if (!sender) {
            console.error("Error: Sender not found with ID: " + senderId);
            return;
        }

        if (!chat.getMembers().some(member => member.equals(sender))) {
            console.error("Error: Sender " + sender.getName() + " is not a member of this chat.");
            return;
        }

        const message = new Message(sender, messageContent);
        chat.addMessage(message);

        // Notify all members of the chat (Observer pattern)
        for (const member of chat.getMembers()) {
            // Do not send a notification to the sender
            if (!member.equals(sender)) {
                member.onMessageReceived(message, chat);
            }
        }
    }

    printChatHistory(chatId: string): Message[] {
        const chat = this.chats.get(chatId);
        if (chat) {
            return chat.getMessages();
        }
        return [];
    }

    getUserChats(userId: string): Chat[] {
        const user = this.users.get(userId);
        if (!user) {
            return [];
        }
        return Array.from(this.chats.values())
            .filter(chat => chat.getMembers().some(member => member.equals(user)));
    }
}