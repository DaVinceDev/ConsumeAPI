
export class WorkerClass{
    constructor(
    public id : number | undefined,
    public fullName: string,
    public username: string,
    public email: string,
    public age: number,
    public passwordHash: string,
    public description: string | null,
    public tags: string[] | null,
    public contact: number | null,){}
}