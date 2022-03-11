import { Controller, Get, Put, Delete, Post } from "@nestjs/common";
import { {{ cookiecutter.module_mame_pascal }}Service } from "./{{cookiecutter.module_mame_pascal}}.service";

@Controller("{{cookiecutter.module_path}}")
export class {{ cookiecutter.module_mame_pascal }}Controller {
  constructor(private readonly {{ cookiecutter.module_mame_pascal }} Service: { { cookiecutter.module_mame_pascal } }Service) { }

}
