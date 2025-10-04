import { Component, OnInit } from '@angular/core';

import { Router ,ActivatedRoute, CanActivate, Params, Routes, RouterModule  } from '@angular/router';

import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {

  public apiBaseURL = 'http://127.0.0.1:8000/api/';
  public ADD_ENQUIRY = this.apiBaseURL+'user/add/enquiry';

  actionText:any = 'Add';
  id = '';
  url_segment:any = '';
  loginError: string='';
  error: any='';
  submitted = false;
  showHeader:boolean = true;
  showErro:boolean = false;
  enquiryForm:any = FormGroup;


  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private fb : FormBuilder,
    private http: HttpClient,
    private SpinnerService: NgxSpinnerService,
  ){}

  ngOnInit(): void {
    this.createEnquiryForm();
  }

  createEnquiryForm(){
    this.enquiryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      zip: ['', [Validators.required, Validators.minLength(6)]],
      address: ['',Validators.required],
      message: ['', Validators.required],
	  status: ['open']
    });
  }

  get f() { return this.enquiryForm.controls; }

  onSubmit(formdata:any) {
    console.log('forma data : ',formdata);
    this.submitted = true;
    if (this.enquiryForm.invalid) {
        return;
    }

    let url = this.ADD_ENQUIRY;
    console.log(url);
    this.http.post(url, formdata)
      .subscribe((response: any) => {
        console.log(response);
        if(response.code==200){
          this.enquiryForm.reset('');
        }
      },
        error => {
          // handle the error
        }
      );
  }

}
