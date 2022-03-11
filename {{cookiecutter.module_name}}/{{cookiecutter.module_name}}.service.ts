import { Injectable } from "@nestjs/common";
import {{ cookiecutter.Module_Name }} from "src/types/{{cookiecutter.Module_Name}}";

@Injectable()
export class {{ cookiecutter.Module_Name }}Service {
  {% if cookiecutter.module_routes | length > 0 %}
  {% for item in cookiecutter.module_routes | list %}
  {{ item.name }} (): string {
    return "{{item.name}}";
  }
  {% endfor %}
  {% endif %}
}
