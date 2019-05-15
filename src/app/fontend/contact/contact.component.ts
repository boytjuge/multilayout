import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  submitted:boolean = false;
  success:boolean = true;


  constructor(private route:ActivatedRoute , private titleService:Title,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title']),
    this.contactForm = this.formBuilder.group({
      firstname:['',Validators.required] ,
      lastname:['',Validators.required],
      email:['',Validators.compose([Validators.required, Validators.email])],
      tel:['',Validators.required]
      
    });
   // console.log(controls.errors);
  }

  get f(){return this.contactForm.controls;}


  onSubmit(){
    this.submitted = true;

    //stop is from isvalid

    if ( this.contactForm.invalid ){
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value));
    console.log(JSON.stringify(this.contactForm.value));
  }

}
