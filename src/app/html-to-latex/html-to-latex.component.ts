import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { DomSanitizer } from '@angular/platform-browser';

// https://medium.com/vakifbank-teknoloji/using-ckeditor-5-with-an-angular-application-134764ba33a4
// https://github.com/sibiraj-s/ngx-editor

const editorContent = `
  <h1>Hello from CKEditor 5!</h1>
  <h2>Check the inspector below</h2>
  <ul>
    <li>Check the Model</li>
    <li>See the View</li>
    <li>Check available commands</li>
  </ul>
`;

const editorConfig = {
  // ui: 'pt',
  // language: 'pt',
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      '|',
      'strikethrough',
      'code',
      '|', // Não tem ainda
      'bulletedList',
      'numberedList',
    ],
  },
};

@Component({
  selector: 'app-html-to-latex',
  templateUrl: './html-to-latex.component.html',
  styleUrls: ['./html-to-latex.component.css']
})
export class HtmlToLatexComponent {

  output: any;
  ckeditor = ClassicEditor;
  editorConfig = editorConfig;
  editorContent = editorContent;

  constructor(private domSanitizer: DomSanitizer) {}

  onChange({ editor }: ChangeEvent) {
    this.editorContent = editor.getData();
  }

  submit() {
    this.output = this.domSanitizer.bypassSecurityTrustHtml(this.editorContent);
  }
}
