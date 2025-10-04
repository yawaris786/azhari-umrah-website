import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent {

  public apiBaseURL = 'http://127.0.0.1:8000/api/';
  public FRANCHISE_LIST_ALL = this.apiBaseURL+'user/franchise/listing-all';

  total:any;
  startvalue:any;
  endvalue:any;
  noofpages:any;
  current_page:any = 1;
  franchiseList:any;
  package_status:any; 
  url_segment: any;
  select_umrah_types: any;
  view_all_package: any = false;
  filterForm:any = FormGroup;
  packageList:any;

	constructor(
    private formBuilder: FormBuilder,
    private fb : FormBuilder,
      private router: Router,
      private http: HttpClient
  ){}


  ngOnInit(): void {
    this.franchise_list();
  }




  franchise_list() {

    let url = this.FRANCHISE_LIST_ALL;
    this.http.get(url)
      .subscribe((response: any) => {
        this.franchiseList = response.data.data;
        console.log(this.franchiseList)
      },
        error => {
          // handle the error
        }
      );

  }

}
