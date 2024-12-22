import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      toast.success('Message sent successfully!')
      reset()
    } catch (error) {
      toast.error('Failed to send message')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">Contact Santa</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              {...register('name', { required: true })}
              className="w-full p-2 border rounded"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full p-2 border rounded"
            />
            {errors.email && <span className="text-red-500">Valid email is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              {...register('message', { required: true, maxLength: 1000 })}
              className="w-full p-2 border rounded"
              rows="4"
            />
            {errors.message && <span className="text-red-500">Message is required</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
