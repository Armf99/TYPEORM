import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserProfileDto } from 'src/users/dtos/CreatUserProfile.dto';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

constructor(private userService: UsersService) {}

    @Get("")
     async getUsers() {
        return this.userService.findUsers();


     }

    @Post("")
    createUser(@Body() CreateUserDto: CreateUserDto) {
         return this.userService.createUser(CreateUserDto);

    }


    @Put(':id')
     async updateUserById(
        @Param('id', ParseIntPipe) id: number,
        @Body() UpdateUserDto: UpdateUserDto,
    ){
      await  this.userService.updateUser(id, UpdateUserDto);

    }

@Delete(':id')
async deleteUserByid(
    @Param('id', ParseIntPipe) id: number){
await  this.userService.deleteUser(id);  
}
@Post(':id/profiles')
createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserProfileDto: UserProfileDto,
    ){
return this.userService.createUserProfile(id, createUserProfileDto);

    }

}

