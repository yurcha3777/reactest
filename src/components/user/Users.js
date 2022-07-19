import {useForm} from "react-hook-form";

import {createUser} from "../../services";

const Users = () => {
    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: 'name',
                username: 'username',
                email: 'exmple@gmail.com',
                adress: 'address'
            }
        }
    );
    const submit = (obj) => {
        createUser(obj).then(value => console.log(value))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('name', {required: true})}/>
                {
                    errors.name && <span>fields required</span>
                }
                <input type='text' {...register('username', {required: true})}/>
                {
                    errors.username && <span>fields required</span>
                }
                <input type='text' {...register('email', {required: true})}/>
                {
                    errors.email && <span>fields required</span>
                }
                <input type='text' {...register('adress', {required: true})}/>
                {
                    errors.adress && <span>fields required</span>
                }
                <input type='submit'/>


            </form>
        </div>
    );
}

export {Users};