import { Component ,OnInit} from '@angular/core';
import { Items } from '../modals/items';
import { AdminserviceService } from '../adminservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup,FormBuilder } from  '@angular/forms'
import { ItemsCategory } from '../adminlanding/itemsmodal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent {
  constructor(public elements:AdminserviceService,private http: HttpClient,private fb:FormBuilder,private router: Router){
  
  }
  
  formValue!:FormGroup;
  categoryobj:ItemsCategory=new ItemsCategory();
 getCategories:string='';
  ngOnInit()
{
 this.categoryobj = new ItemsCategory();
 this.loadData(this.currentPage);
 this.formValue = this.fb.group
 ({
  id:[''],
   categoryname:[''],
   categorydiscription:[''],
   categoryimage:['']
 })


}
imageSrc:any="";
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imageSrc = e.target.result;
      this.imageSrc = imageSrc; // bind the data URL to a property
    };
    reader.readAsDataURL(file);
  }

  onFileSelection(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imageSrc = e.target.result;
      this.imageSrc = imageSrc; // bind the data URL to a property
    };
    reader.readAsDataURL(file);
  }

  data:ItemsCategory[]=[];
  totalItems:number = 0;
  currentPage:number= 1;
  itemsPerPage:number = 6;


  
  loadData(page: number) {
    this.elements.getData(page, this.itemsPerPage).subscribe((response: any) => {
      this.data = response;
      this.totalItems = response.length;
    });
  }
  addItems(data:ItemsCategory){
    /*this.categoryobj.categoryname=this.formValue.value.categoryname;
    this.categoryobj. categorydiscription=this.formValue.value. categorydiscription;
    this.categoryobj.categoryimage=this.formValue.value.categoryimage;
    console.log(this.categoryobj);*/
    console.log(data);
    this.elements.addData(data).subscribe((_res:any)=> {
   
      });
  }
  deleteItem(data:any){
    this.elements.deleteData(data).subscribe((_res:any)=> {
      this.loadData(this.currentPage);
    }),
      (_err: any) =>{
    alert("failed to delete" );
    }

  }
  editItem(){
    this.elements.updateData(this.formValue.value).subscribe((_res:any)=> {
      this.loadData(this.currentPage);
    }),(err: any)=>{
      alert("Unable to update task");
    }
  }
  


    

 /* onPageChange(page: number) {
    this.currentPage = page;
    this.loadData(page);

  } */

  nextPage() {
    if(this.currentPage>=0|| this.currentPage!=10){
    this.currentPage++;
    this.loadData(this.currentPage);
  }else{
    this.loadData(this.currentPage);
  }
}
  
  prevPage() {
    if(this.currentPage>=10 || this.currentPage!=1){
    this.currentPage--;
    this.loadData(this.currentPage);
  }else{
    this.loadData(this.currentPage);
  }
}

}

// getData() {
//   this.dataService.getData(this.currentPage, this.itemsPerPage)
//     .subscribe((data: any[]) => {
//       this.data = data;
//       this.totalItems = data.length;
//     });
// }

// onPageChange(event: any) {
//   this.currentPage = event;
//   this.getData();
// }

// }


