import { Controller, Get, Put, Delete, Post } from "@nestjs/common";
import { {{ cookiecutter.module_mame_pascal }}Service } from "./{{cookiecutter.module_name}}.service";

@Controller("{{cookiecutter.module_path}}")
constructor(private readonly {{ cookiecutter.module_name }}Service: {{ cookiecutter.module_mame_pascal }}Service) { }
export class {{ cookiecutter.module_mame_pascal }}Controller {

  {% for key, item in cookiecutter.module_routes %}
  @Get("{{ key }}")
  {{ item }}
  {% endfor %}

}
