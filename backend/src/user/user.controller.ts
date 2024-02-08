import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  Session,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectId } from 'typeorm';
import { isAdminGuard } from '../auth/guards/isAdmin.guard';
import { isOwnerGuard } from '../auth/guards/isOwner.guard';
import { AuthenticatedGuard } from '../auth/guards/Authenticated.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register') // @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    if (await this.userService.isEmailExists(createUserDto.email)) {
      return res.status(230).json({ message: 'Email already exists' });
    } else {
      const response = await this.userService.create(createUserDto);
      // console.log(response);
      if (response.User !== null) {
        return res.status(200).json({ message: 'User created' });
      } else {
        return res.status(230).json({ message: 'Error' });
      }
    }
  }

  @UseGuards(isOwnerGuard)
  @Post('admin/register')
  async admincreate(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
    @Session() session: Record<string, any>,
  ) {
    if(session.passport.user.role === 'owner'){
      if (await this.userService.isEmailExists(createUserDto.email)) {
        return res.status(230).json({ message: 'Email already exists' });
      } else {
        const response = await this.userService.admincreate(createUserDto);
        // console.log(response);
        if (response.User !== null) {
          return res.status(200).json({ message: 'User created' });
        } else {
          return res.status(230).json({ message: 'Error' });
        }
      }
    }
    return null;

  }

  @UseGuards(isAdminGuard) @Get('findall') findAll(@Session() session: Record<string, any>) {
    console.log(session.passport.user);
    if(session.passport.user.role === 'admin' || session.passport.user.role === 'owner') {
        return this.userService.findAll();
    }
    return null;
  }

  @Get(':id') findOne(@Param('id') id: ObjectId) {
    return this.userService.findOne(id);
  }

  @UseGuards(isAdminGuard) @Get('email/:email') findOneByEmail(
    @Param('email') email: string,@Session() session: Record<string, any>,
  ) {
    if(session.passport.user.role === 'admin' || session.passport.user.role === 'owner') {
      console.log('findOneByEmail');
      return this.userService.findOneByEmail(email);
    }
    return null;
  }

  @UseGuards(isAdminGuard)
  @Post('admin/passwordReset')
  async passwordReset(@Body() body: any, @Res() res: Response, @Session() session: Record<string, any>) {
    // console.log(body);
    if(session.passport.user.role === 'admin' || session.passport.user.role === 'owner') {
        const response = await this.userService.passwordReset(body.lead, body.pass);
        if (response !== null) {
            return res.status(201).json({ message: 'Password reset' });
        } else {
            return res.status(230).json({ message: 'Error' });
        }
    }
    return null;
  }

  @UseGuards(isAdminGuard)
  @Get('admin/data/:email')
  async data(@Param('email') email: string, @Session() session: Record<string, any>) {
    if(session.passport.user.role === 'admin' || session.passport.user.role === 'owner') {
      const response = await this.userService.profile(email);
      if (response !== null) {
        console.log(response);
        return await response;
      }
    }
    return null;

  }

  @UseGuards(AuthenticatedGuard)
  @Post('passwordReset')
  async userpasswordReset(
    @Body()
    body: {
      prevpassword: string;
      password: string;
    },
    @Res() res: Response,
    @Session() session: Record<string, any>,
  ) {
    // console.log(body);
    const email = session.passport.user.email;
    // console.log(email);
    const response = await this.userService.userPasswordReset(
      email,
      body.password,
      body.prevpassword,
    );
    console.log(response);
    if (response !== null) {
      return res.status(201).json({ message: 'Password reset' });
    } else {
      return res.status(230).json({ message: 'Error' });
    }
  }

  // @UseGuards(isAdminGuard) @Patch(':id') update(
  //   @Param('id') id: string,
  //   @Body() updateUserDto: UpdateUserDto,
  //   @Session() session: Record<string, any>,
  // ) {
  //
  //   return this.userService.update(+id, updateUserDto);
  // }
  //
  // @UseGuards(isAdminGuard) @Delete(':id') remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
