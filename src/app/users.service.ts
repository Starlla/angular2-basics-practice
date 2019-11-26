export class UsersService{
  private registeredUsers =  ['Max', 'Anna', 'Chris'];

  getUsers() {
    return this.registeredUsers;
  }

}
