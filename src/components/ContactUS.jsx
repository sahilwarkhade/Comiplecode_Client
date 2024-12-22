import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MessageSquare, Send } from 'lucide-react';
import {Button} from '../components/Buttons/Button';

const ContactForm = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <div className="mt-1 relative">
          <input
            type="text"
            name="name"
            id="name"
            required
            className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <div className="mt-1 relative">
          <input
            type="email"
            name="email"
            id="email"
            required
            className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="john@example.com"
          />
          <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <div className="mt-1 relative">
          <textarea
            name="message"
            id="message"
            required
            rows={4}
            className="block w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message here..."
          />
          <MessageSquare className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      {submitStatus === 'success' && (
        <div className="text-green-400 text-center animate-fade-in">
          Message sent successfully!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="text-red-400 text-center animate-fade-in">
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;