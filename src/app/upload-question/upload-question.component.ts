import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-upload-question',
  templateUrl: './upload-question.component.html',
  styleUrls: ['./upload-question.component.css']
})
export class UploadQuestionComponent {
  Subject = ['TOC', 'Docker', 'Angular', 'Java'];
  subjectControl = new FormControl();
  subjects = Object.values(this.Subject);

  constructor(private snackBar: MatSnackBar){}
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      if (file.type !== 'application/json') {
        this.snackBar.open('Invalid file format. Please select a JSON file.', 'Close', {
          duration: 3000
        });
        return;
      }
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const result = JSON.parse(e.target.result);
        console.log(result); // Replace with code to handle the parsed data
      };
      reader.readAsText(file);
    }
  }
  
  onSubmit(){
    
  }

}
