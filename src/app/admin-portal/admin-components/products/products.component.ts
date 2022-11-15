import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild('FileSelect') FileSelect: ElementRef | any ;

 SizePopulateOnClick: any = [];
sizeArray = ['S','M','L','XL','XXL',];
categoryArray = ['Men' , 'Women' , 'Accessories'];
ProductForm: FormGroup  | any;
ImageArray: any = [];
disableButtonTrue: boolean = false;
color = ['Red' , 'Blue' , 'Yellow']

  constructor(
    private FormBuilder:FormBuilder,
    private ToastrService:ToastrService,
    private ProductService:ProductService
  ) {
    this.ProductFormModel();
   }

  ngOnInit(): void {
  }

ProductFormModel(){
  this.ProductForm = this.FormBuilder.group({
    ProductName: new FormControl('' , [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
  Quantity: new FormControl('' , [Validators.required, Validators.pattern(/^[0-9]+$/)]),
  Price: new FormControl('' , [Validators.required, Validators.pattern(/^[0-9]+$/)]),
  Description: new FormControl('' , [Validators.required]),
  Color:new FormControl('' , [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
  CompanyName:new FormControl('' , [Validators.required]),
  LogoMaterial:new FormControl('' , [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
  Category:new FormControl('' , [Validators.required, ]),
  Size: new FormArray([]),
  ProductMaterial:new FormControl('' , [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
  Image: new FormArray([])
  })


}

  GetSize(event:any){
if (event.target.checked) {
  this.SizePopulateOnClick.push(event.target.value)
} else {
  this.SizePopulateOnClick= this.SizePopulateOnClick.filter((value:any)=>value != event.target.value)
}
  }

  GetImage(event: any) {
  
    if (event.target.files.length <= 5) {
       this.ImageArray.push(event.target.files);
  
    } else {
      this.ImageArray = [];
      this.FileSelect.nativeElement.value = null;
      this.disableButtonTrue = true;
      this.ToastrService.warning(`Image selection limit is 5 but you have selected ${event.target.files.length}`);
  }

  }

  CreateProduct(){
     this.SizePopulateOnClick.forEach ((elements:string) => {
      let formControl = new FormControl(elements)
      this.ProductForm.get("Size").push(formControl);
     })

     this.ImageArray.forEach((element: any) => {
      let formControl = new FormControl(element)
      this.ProductForm.get("Image").push(formControl)
    })

    let MultiPartFormData = new FormData();

    MultiPartFormData.append('ProductName' , this.ProductForm.get('ProductName').value);
    MultiPartFormData.append('Quantity' , this.ProductForm.get('Quantity').value);
    MultiPartFormData.append('Price' , this.ProductForm.get('Price').value);
    MultiPartFormData.append('Description' , this.ProductForm.get('Description').value);
    MultiPartFormData.append('Color' , this.ProductForm.get('Color').value);
    MultiPartFormData.append('LogoMaterial' , this.ProductForm.get('LogoMaterial').value);
    MultiPartFormData.append('CompanyName' , this.ProductForm.get('CompanyName').value);
    MultiPartFormData.append('Size' , this.ProductForm.get('Size').value);
     MultiPartFormData.append('ProductMaterial' , this.ProductForm.get('ProductMaterial').value);
    MultiPartFormData.append('Image' , this.ProductForm.get('Image').value);
    
    this.ProductService.CreateProductCard(MultiPartFormData).subscribe((ResponseFromMyBackend:any) => {console.log(ResponseFromMyBackend);})
  }

}




// MultiPartFormData.append('productName', this.ProductForm.get('productName').value);

