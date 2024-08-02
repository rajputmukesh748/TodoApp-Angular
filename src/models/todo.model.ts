export class Todo {
    title?: string;
    description?: string;
    isActive?: boolean;

    constructor(title: string, description: string, isActive: boolean){
        this.title = title;
        this.description = description;
        this.isActive = isActive;
    }
}
