import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

// Cada modulo é independente

// nest g module user 
// nest g controller user 

// Modules = Indica outros modulo que ele tem acesso. 
// Providers = O service roda a logica 
// Controllers = Roda o verbos 
// Imports = Modulo de protudos e usuarios 
// Export = Exporta de um modulo para o outro