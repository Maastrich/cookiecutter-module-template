import { Module } from '@nestjs/common';
import { {{ cookiecutter.Module_Name }}Controller } from './{{cookiecutter.module_name}}.controller';
import { {{ cookiecutter.Module_Name }}Service } from './{{cookiecutter.module_name}}.service';

@Module({
  imports: [],
  controllers: [{{cookiecutter.Module_Name}}Controller],
  providers: [{{cookiecutter.Module_Name}}Service],
})
export class {{cookiecutter.Module_Name}}Module { }
