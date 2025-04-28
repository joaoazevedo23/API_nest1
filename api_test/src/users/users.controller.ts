import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /* 
    Get /users -- Todos os Usuários
    Get /users/:id -- 1 usuário
    POST /users - Adicionar usuário
    PATCH /users/:id - Atualizar usuário
    DELETE /users/:id - Deletar usuário
    */

    @Get() // GET /users or users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINIER'){
        return []
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id') id: string){
        return { id }
    }

    @Post() //POST /users
    createUser(@Body() user: {}){
        return user
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdated: {}){
        return { id, ...userUpdated }
    }

    @Delete(':id') //DELETE /users/:id
    delete(@Param('id') id: string){
        return { id }
    }
}
