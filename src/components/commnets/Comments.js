import {useForm} from "react-hook-form";

import {createComments} from "../../services";

const Comments = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            email: 'email',
            body: 'body'
        }
    })
    const submitTwo = (objTwo) => {
createComments(objTwo).then(value => console.log(value))
    }
    return (
        <div>
      <form onSubmit={handleSubmit(submitTwo)}>
          <input type='text' {...register('name',{required: true})}/>
          {
              errors.name && <span>fields required</span>
          }
          <input type='text' {...register('email', {required: true})}/>
          {
              errors.email && <span>fields required</span>
          }
          <input type='text' {...register('body',{required:true})}/>
          {
              errors.body && <span>fields required</span>
          }

          <input type='submit'/>
      </form>
        </div>
    );
}
export {Comments}