import React from 'react'
import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'

function Form() {


    const { register, handleSubmit, formState: { errors } } = useForm()


    async function sentMessage(data) {
        try {
            const response = await axios.post('http://localhost:4000/api/save-message', { data })
            if (response.data.status == 1) {
                toast("Your message is sent successfully!")
            } else {
                toast("Unable to sent message!")
            }
        } catch (error) {
            console.log("err", error)
        }
    }

    return (
        <section className='cta py-20 px-10 '>
            <div className='text-center md:grid md:grid-cols-2 md:gap-16 md:text-left md:place-items-center max-w-7xl mx-auto'>
                <div>
                    <h2 className='text-white mb-8  font-bold text-2xl md:text-3xl lg:text-4xl'>Get early access today</h2>
                    <p className='text-white mb-10 '> It only takes a minute to sign up and our free starter tier is extremely generous.
                        If you have any questions, our support team would be happy to help you.</p>
                </div>

                <form onSubmit={handleSubmit((data) => {
                    sentMessage(data)
                })}>
                    { console.log(errors)}
                    <div className='mb-3 w-full'>
                        <input type="text" name="name" id="email" placeholder='Name' className='w-full rounded py-3 px-4' {...register('name', { required: true })} />
                        {errors.name && <p className='text-white'>Name is required</p>}
                    </div>

                    <div className='mb-3 w-full'>
                        <input type="email" name="email" id="email" placeholder='example@gmail.com' className='w-full rounded py-3 px-4' {...register('email', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                        {errors.email && errors.email.type == 'required' && <p className='text-white'>Email is required</p>}
                        {errors.email && errors.email.type == 'pattern' && <p className='text-white'>Invalid Email </p>}
                    </div>

                    <div className='w-full'>
                        <textarea type="text" name="message" id="email" placeholder='Message' className='w-full rounded py-3 px-4' {...register('message', { required: true })} />
                        {errors.message && <p className='text-white'>Message is required</p>}
                    </div>
                    <button type='submit' className='btn text-sm py-3 px-4 rounded mt-4 w-full text-white font-bold tracking-wide'>Get Started For Free</button>
                </form>
            </div>
        </section>
    )
}

export default Form