import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../common/custom.validators';

@Component({
  selector: 'app-rective-form',
  templateUrl: './rective-form.component.html',
  styleUrls: ['./rective-form.component.css']
})
export class RectiveFormComponent implements OnInit {

  
  alphabatRegx = /^[a-zA-Z ]*$/;
  _email = '^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$';
  form : any;
  constructor(private fb: FormBuilder) {

   


  }

  ngOnInit(): void {


    this.form = this.fb.group(
      {
        

                      name:
                        [
                          '',
                          [
                            Validators.required,
                            Validators.minLength(4),
                            
                            Validators.pattern(this.alphabatRegx)
                          ],
                        ],
                      
                        
             
          email:
              [
                '',
                [
                  Validators.required,
                  Validators.pattern(this._email),
                  Validators.email,
                  
                  
                ],
              ],
              confirm_email:
              [
                '',
                [
                  Validators.required,
                  Validators.pattern(this._email),
                  Validators.email,
                               
                  
                ],
              ],
         
            

             degree :
             ['',
                  [
                  Validators.required,
               
                  

                  ],          
             ],

             dob :
             ['',
                    [ 
                      Validators.required,
                      
                    ]
            
            
            ],

            country :
            ['',
                [  Validators.required,
                  
                ],
          
          ],
          state : 
          ['',

            [
              Validators.required,
              
              
            ],
          
          
          ],

          city : 
          ['',

            [
              Validators.required,
             
              
            ],
          
          
          ],

             
       



      },{
        validator : ConfirmedValidator('email', 'confirm_email') 
      })
     

  }



 

get fn()
{
  return this.form.get('name');
}




get mailchk()
{
  return this.form.get('email');
}

get conmailchk()
{
  return this.form.get('confirm_email');
}




get dob()
{
  return this.form.get('dob');
}






get degree()
{
  return this.form.get('degree');
}



get country()
{
  return this.form.get('country');

}


get state()
{
  return this.form.get('state');
}

get city()
{
  return this.form.get('city');
}



}
