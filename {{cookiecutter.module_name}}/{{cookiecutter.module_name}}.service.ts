import { Injectable } from '@nestjs/common';
import {{ cookiecutter.Module_Name }} from 'src/types/{{cookiecutter.Module_Name}}';

@Injectable()
export class {{ cookiecutter.Module_Name }}Service {
  {% for item in cookiecutter.module_routes %}
  {{item.name}}(): string {
    return '{{item.name}}';
  }
  {% endfor %}
}
