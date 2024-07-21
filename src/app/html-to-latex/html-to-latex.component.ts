import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { DomSanitizer } from '@angular/platform-browser';

import '@ckeditor/ckeditor5-build-classic/build/translations/pt';

const editorContent = `
<h1>Bem-vindo ao HtmlToLatexAngular</h1>
<p>Este conversor permite que você escreva conteúdo rico utilizando o CKEditor 5 e, em seguida, converta esse conteúdo para o formato LaTeX.</p>
<ol>
  <li><strong>Escreva seu conteúdo no editor:</strong>
    <p>Use as funcionalidades do CKEditor 5 para criar e formatar seu texto. Você pode adicionar cabeçalhos, listas, negrito, itálico, links, entre outras opções.</p>
  </li>
  <li><strong>Visualize o conteúdo gerado:</strong>
    <p>Utilize a seção abaixo do editor para inspecionar o conteúdo em HTML gerado pelo CKEditor. Isso permitirá que você veja como seu texto está sendo estruturado antes de convertê-lo para LaTeX.</p>
  </li>
</ol>
`;

const editorConfig = {
  language: 'pt',
  toolbar: {
    items: [
      'undo', 'redo', '|', 'heading', '|', 'bold', 'italic', 'link', '|',
      'strikethrough', 'code', '|', 'bulletedList', 'numberedList', '|',
      'outdent', 'indent', '|', 'blockQuote', 'insertTable', '|',
      'mediaEmbed', 'removeFormat'
    ]
  }
};

@Component({
  selector: 'app-html-to-latex',
  templateUrl: './html-to-latex.component.html',
  styleUrls: ['./html-to-latex.component.css']
})
export class HtmlToLatexComponent {
  public Editor = ClassicEditor;
  public editorConfig = editorConfig;
  public editorContent = editorContent;
  public output: any;

  constructor(private domSanitizer: DomSanitizer) {}

  onChange({ editor }: ChangeEvent) {
    this.editorContent = editor.getData();
  }

  submit() {
    this.output = this.domSanitizer.bypassSecurityTrustHtml(this.editorContent);
  }
}
