import { Controller, Get, Put, Delete, Post } from "@nestjs/common";
import { {{ cookiecutter.Module_Name }}Service } from "./{{cookiecutter.module_name}}.service";

@Controller("{{cookiecutter.module_path}}")
export class {{ cookiecutter.Module_Name }}Controller {
  constructor(private readonly {{ cookiecutter.module_name }} Service: {{ cookiecutter.Module_Name }}Service) { }

}
