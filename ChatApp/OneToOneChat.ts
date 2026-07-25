class OneToOneChat extends Chat {
    constructor(user1: User, user2: User) {
        super();
        this.members.push(user1, user2);
    }

    getName(perspectiveUser: User): string {
        // The chat name from a user's perspective is the other user's name.
        const otherUser = this.members.find(member => !member.equals(perspectiveUser));
        return otherUser ? otherUser.getName() : "Unknown Chat";
    }
}