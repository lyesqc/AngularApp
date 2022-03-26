export class UserDto {
    private userName : string;
    private password : string;
    private lastLoginDate : Date;

    constructor(userName:string, password: string, lastLoginDate:Date ){
        this.userName = userName;
        this.password = password;
        this.lastLoginDate = lastLoginDate;
    }
}