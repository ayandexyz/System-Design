class GroupChat extends Chat {
    private groupName: string;

    constructor(groupName: string, initialMembers: User[]) {
        super();
        this.groupName = groupName;
        this.members.push(...initialMembers);
    }

    addMember(user: User): void {
        if (!this.members.some(member => member.equals(user))) {
            this.members.push(user);
        }
    }

    removeMember(user: User): void {
        const index = this.members.findIndex(member => member.equals(user));
        if (index !== -1) {
            this.members.splice(index, 1);
        }
    }

    getName(perspectiveUser: User): string {
        return this.groupName;
    }
}