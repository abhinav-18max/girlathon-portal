import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res, Session,
  UseGuards,
} from '@nestjs/common';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { IdeaService } from './idea.service';
import { Response } from 'express';
import { isAdminGuard } from '../auth/guards/isAdmin.guard';
import {AuthenticatedGuard} from "../auth/guards/Authenticated.guard";

@Controller('idea')
export class IdeaController {
  constructor(private readonly ideaService: IdeaService) {}

 @UseGuards(AuthenticatedGuard)
  @Post('submit')
  async submit(@Body() CreateIdea: CreateIdeaDto, @Res() res: Response) {
    if (await this.ideaService.issubmitted(CreateIdea.team)) {
      return res.status(230).json({ message: 'Already submitted' });
    }
    const response = await this.ideaService.create(CreateIdea);
    console.log(response)
    if (response !== null) {
      res.status(201).json({ message: 'success' });
    } else {
      res.status(250).json({ message: 'Error creating' });
    }
  }

  @UseGuards(isAdminGuard)
  @Get('view/:team')
  async view(@Param('team') team: string, @Res() res: Response,@Session() session: Record<string, any>) {
    if(session.passport.user.role === 'owner' || session.passport.user.role === 'admin'){
      const response = await this.ideaService.view(team);
      if (response !== null) {
        res.status(201).send(response);
      } else {
        res.status(250).json({ message: 'Error view' });
      }
    }
    return null;

  }

  @UseGuards(isAdminGuard)
  @Get('mark/:team')
  async mark(@Param('team') team: string, @Res() res: Response,@Session() session: Record<string, any>) {
   if(session.passport.user.role === 'owner' || session.passport.user.role === 'admin'){
     const response = await this.ideaService.updateToggle(team);
     if (response !== null) {
       res.status(201).send(response);
     } else {
       res.status(250).json({ message: 'Error marking' });
     }
   }
    return null;

  }

  @UseGuards(isAdminGuard)
  @Get('list')
  async list(@Session() session: Record<string, any>) {
    if (session.passport.user.role === 'owner' || session.passport.user.role === 'admin') {
      const response = await this.ideaService.listmarked();
      if (response !== null) {
        return response;
      } else {
        return null;
      }
    }
    return null;

  }

  @Get('delete/:team')
  async delete(@Param('team') team: string, @Res() res: Response) {
    const response = await this.ideaService.delete(team);
    if (response !== null) {
      res.status(201).send(response);
    } else {
      res.status(250).json({ message: 'Error deleting' });
    }
  }
}
