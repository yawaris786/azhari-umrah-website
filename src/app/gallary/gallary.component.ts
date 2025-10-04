import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {

  public apiBaseURL = 'http://127.0.0.1:8000/api/';
    public GET_GALLARY = this.apiBaseURL+'user/gallary/listing';
    public PACKAGE_LIST_ALL = this.apiBaseURL+'user/package/listing-all';
	
	total:any;
  startvalue:any;
  endvalue:any;
  noofpages:any;
  current_page:any = 1;
  gallaryList:any;
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

    this.url_segment = this.router.url.split('/');
    console.log(this.url_segment)
    if(this.url_segment[1] != undefined && (this.url_segment[1] == 'home' || this.url_segment[1] == 'umrah')){
      this.select_umrah_types = '';//this.url_segment[1];
    }
    else if(this.url_segment[1] != undefined && this.url_segment[1] == 'baghdad-umrah'){
      this.select_umrah_types = this.url_segment[1];
    }
    else if(this.url_segment[1] != undefined && this.url_segment[1] == 'popular-deals'){
      this.select_umrah_types = this.url_segment[1];
    }else{
      this.select_umrah_types = 'umrah';
    }
    console.log(this.select_umrah_types)
    this.get_gallary(this.select_umrah_types);
    this.package_list();
    this.createFilterForm();
  }


  assignData(resp:any){
    this.gallaryList = resp.data;
    if(resp.paginate_data!= undefined){
      this.total = resp.paginate_data[0].total;
      this.startvalue = resp.paginate_data[0].start;
      this.endvalue = resp.paginate_data[0].end;
      this.noofpages = resp.paginate_data[0].last_page;
      this.current_page = resp.paginate_data[0].current_page;
    }else{
      this.total = 0;
      this.startvalue = 0;
      this.endvalue = 0;
      this.noofpages = 0;
      this.current_page = 0;
    }
  }

  get_gallary(umrah_types:any) {
    this.current_page = this.current_page;
    //this.SpinnerService.show(); 
    
    //const headersVal = this.AppSetting.headers;
    //const options = { headers: headersVal };

    //let all_parameters = this.AppSetting.getAdditionalParameters(this);
    let url = this.GET_GALLARY+'?page='+this.current_page;

    this.http.get(url)
      .subscribe((response: any) => {
        // console.log(response.code);
        this.assignData(response);
        // this.gallaryList = response.data;
       // this.SpinnerService.hide();
      },
        error => {
          // handle the error
        }
      );

  }

  pageChangeEvent(num: any){
    this.current_page = num
    this.get_gallary(this.select_umrah_types);
  }

  package_list() {

    let url = this.PACKAGE_LIST_ALL;

    this.http.get(url)
      .subscribe((response: any) => {
        console.log(response.data);
        this.packageList = response.data;

      },
        error => {
          // handle the error
        }
      );

  }

  get f() { return this.filterForm.controls; }

  createFilterForm(){
    this.filterForm = this.formBuilder.group({
      package_id: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onFilterSubmit(formdata:any) {
    console.log('forma data : ',formdata);

    // const headersVal = this.AppSetting.headers;
    // console.log(headersVal);
    // const options = { headers: headersVal };
    let url = this.GET_GALLARY;
    console.log(url);
    this.http.post(url, formdata )
      .subscribe((response: any) => {
        console.log(response);
        if(response.code==200){
          this.assignData(response);
          
        }
      },
        error => {
          // handle the error
        }
      );
  }
}
