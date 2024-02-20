import { Body, Controller, Post } from '@nestjs/common'
import { JoiPipe } from 'nestjs-joi'

import { Public } from '../constants'
import { SignInDto } from '../dto'
import { AuthService } from '../services'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async signIn(@Body(JoiPipe) signInDto: SignInDto) {
    const response = await this.authService.signIn(signInDto)

    return response
  }
}
