import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import "./AddPetComponent.scss"

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const AddPetComponent = () => {
    const { register, handleSubmit } = useForm();  
 

    const onSubmit = formData => {
        console.log("hola")
        API.post('/pets', formData).then(res => {
            console.log(res);
           
        })
    }
  return (
    <div className='c-addpet-container'>
        <SimpleBar className='c-gallery-holder'>
        <form className='c-addpet-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="species" className='c-input' placeholder="species" {...register("species",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="sex" className='c-input' placeholder="sex" {...register("sex",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="colour" className='c-input' placeholder="colour" {...register("colour",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="name" className='c-input' placeholder="name" {...register("name",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="age" className='c-input' placeholder="age" {...register("age",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="size" className='c-input' placeholder="size" {...register("size",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="city" className='c-input' placeholder="city" {...register("city",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="category" className='c-input' placeholder="category" {...register("category",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="birthday" className='c-input' placeholder="birthday" {...register("birthday",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="weigth" className='c-input' placeholder="weigth" {...register("weigth",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="record" className='c-input' placeholder="record" {...register("record",{ required: false })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="vaccinated" className='c-input' placeholder="vaccinated" {...register("vaccinated",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="dewormed" className='c-input' placeholder="dewormed" {...register("dewormed",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="healthy" className='c-input' placeholder="healthy" {...register("healthy",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="sterilized" className='c-input' placeholder="sterilized" {...register("sterilized",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="identified" className='c-input' placeholder="identified" {...register("identified",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="microchip" className='c-input' placeholder="microchip" {...register("microchip",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="requirements" className='c-input' placeholder="requirements" {...register("requirements",{ required: false })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="adoptionCost" className='c-input' placeholder="adoptionCost" {...register("adoptionCost",{ required: false })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="delivery" className='c-input' placeholder="delivery" {...register("delivery",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="photo" className='c-input' placeholder="photo" {...register("photo",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="condition" className='c-input' placeholder="condition" {...register("condition",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="animalProtectors" className='c-input' placeholder="animalProtectors" {...register("animalProtectors",{ required: true })}/>
                </div>
                
                
                <div className='c-regasoc-button'><button  type="submit" className='c-regasoc-button__blue'>Register</button></div>
            </form>
            </SimpleBar>
        </div>
  )
}

export default AddPetComponent