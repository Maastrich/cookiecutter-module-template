import { Controller, Get, Put, Delete, Post } from "@nestjs/common";
import { {{ cookiecutter.Module_Name }}Service } from "./{{cookiecutter.module_name}}.service";

@Controller("{{cookiecutter.module_path}}")
export class {{ cookiecutter.Module_Name }}Controller {
  constructor(private readonly {{ cookiecutter.module_name }} Service: {{ cookiecutter.Module_Name }}Service) { }

{% if cookiecutter.module_routes|length > 0 %}
{% for item in cookiecutter.module_routes %}
@{{ item.method }}("{{item.path}}")
{{ item.name }} (): string {
  return {{ cookiecutter.module_name }
}Service.{{ item.name }} ();
  }
{% endfor %}
{% endif %}
}
