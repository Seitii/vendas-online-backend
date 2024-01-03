import { Body, Controller, Post } from '@nestjs/common';
import { get } from 'http';
import { json } from 'stream/consumers';
import {CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
    @Post()
    async createUser(
        @Body() createUser: CreateUserDto){
        return {
            ...createUser,
            password: undefined, // password "undefined" == não exibe a senha do usuario no postman
        };
    } 
}

// ASYNC = enquanto não tem todo resultado, ela não finaliza. 

// Verbos post
// GET = Busca os dados
// Post = Envia e salva a informação.
// Put = Modifica e edita todos os dados do usuario.
// Path = Edita e muda somente o usuario.

// dtos = Data Transfer é uma informação que vai ser enviada. o usuario vai te enviar. 
// interface = Objeto que vamos manipular