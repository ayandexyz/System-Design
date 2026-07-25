class ChatApplicationDemo {
    static main(): void {
        // 1. Initialize the Mediator (ChatService)
        const chatService = new ChatService();

        // 2. Create and register users
        const alice = chatService.createUser("Alice");
        const bob = chatService.createUser("Bob");
        const charlie = chatService.createUser("Charlie");

        console.log("--- Users registered in the system ---");
        console.log();

        // 3. Scenario 1: One-on-one chat between Alice and Bob
        console.log("--- Starting one-on-one chat between Alice and Bob ---");
        const aliceBobChat = chatService.createOneToOneChat(alice.getId(), bob.getId());

        // Alice sends a message to Bob
        console.log("Alice sends a message...");
        chatService.sendMessage(alice.getId(), aliceBobChat.getId(), "Hi Bob, how are you?");

        // Bob sends a reply
        console.log("\nBob sends a reply...");
        chatService.sendMessage(bob.getId(), aliceBobChat.getId(), "I'm good, Alice! Thanks for asking.");
        console.log();

        // 4. Scenario 2: Group chat
        console.log("--- Starting a group chat for a 'Project Team' ---");
        const projectMembers = [alice.getId(), bob.getId(), charlie.getId()];
        const projectGroup = chatService.createGroupChat("Project Team", projectMembers);

        // Charlie sends a message to the group
        console.log("Charlie sends a message to the group...");
        chatService.sendMessage(charlie.getId(), projectGroup.getId(), "Hey team, when is our deadline?");

        // Alice replies to the group
        console.log("\nAlice replies to the group...");
        chatService.sendMessage(alice.getId(), projectGroup.getId(), "It's next Friday. Let's sync up tomorrow.");
        console.log();

        // 5. Demonstrate fetching chat history
        console.log("--- Fetching Chat Histories ---");

        // History of Alice and Bob's chat
        console.log("\nHistory for chat '" + aliceBobChat.getName(alice) + "':");
        const oneToOneHistory = chatService.printChatHistory(aliceBobChat.getId());
        oneToOneHistory.forEach(message => console.log(message.toString()));

        // History of the project group chat
        console.log("\nHistory for chat '" + projectGroup.getName(charlie) + "':");
        const groupHistory = chatService.printChatHistory(projectGroup.getId());
        groupHistory.forEach(message => console.log(message.toString()));

        // 6. Demonstrate finding all of a user's chats
        console.log("\n--- Fetching all of Alice's chats ---");
        const aliceChats = chatService.getUserChats(alice.getId());
        aliceChats.sort((a, b) => a.getName(alice).localeCompare(b.getName(alice)));
        for (const chat of aliceChats) {
            console.log("Chat: " + chat.getName(alice));
        }
    }
}

// Run the demo
ChatApplicationDemo.main();