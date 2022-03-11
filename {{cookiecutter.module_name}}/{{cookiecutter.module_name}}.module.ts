import { Module } from '@nestjs/common';
import { {{ cookiecutter.module_mame_pascal }}Controller } from './{{cookiecutter.module_name}}.controller';
import { {{ cookiecutter.module_mame_pascal }}Service } from './{{cookiecutter.module_name}}.service';

@Module({
  imports: [],
  controllers: [{{ cookiecutter.module_mame_pascal }}Controller],
  providers: [{{ cookiecutter.module_mame_pascal }}Service],
})
export class {{ cookiecutter.module_mame_pascal }}Module { }
