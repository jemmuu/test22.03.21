import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  _form: any;
  _data = [];

  constructor(private fb: FormBuilder,private router : Router) { }

  ngOnInit(): void {

    this._form = this.fb.group(
      {
        

                      proname:
                                [
                                  '',
                                  [
                                    Validators.required,
                                    Validators.minLength(4),                                   
                                    
                                  ],
                                ],
                       category:
                                [
                                  '',
                                  [
                                    Validators.required,
                                    Validators.minLength(4),                                   
                                    
                                  ],
                                ],
                     discription:
                                [
                                  '',
                                  [
                                    Validators.required,
                                    Validators.minLength(4),                                   
                                    
                                  ],
                                ],
                                   
                                img:
                                [
                                  '',
                                  [
                                    Validators.required,
                                    Validators.minLength(4),                                   
                                    
                                  ],
                                ],
          

      })
  }

storeData()
{
  if(localStorage.getItem('data'))
  {
    this._data = JSON.parse(localStorage.getItem('data'));
    
  }
  const pData = [{
        'name': this.proname.value, 
        'category' : this.category.value,
        'discription' : this.discription.value,
        'img' : this.img.value
      
      }]
      console.log(pData);
      this._data.push(pData);
  localStorage.setItem('data',  JSON.stringify(this._data));
  alert('Data submitted Successfully');
  this.router.navigateByUrl('/task2/list-product');
}

  get proname()
  {
    return this._form.get('proname');
  }

  
  get category()
  {
    return this._form.get('category');
  }

  get discription()
  {
    return this._form.get('discription');
  }
  

  get img()
  {
    return this._form.get('img');
  }





}
