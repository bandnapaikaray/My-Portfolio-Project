import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call for pure frontend experience
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-card p-8 rounded-2xl border border-white/5 shadow-xl text-center flex flex-col items-center justify-center min-h-[400px]">
        <CheckCircle2 className="text-primary w-16 h-16 mb-4 animate-bounce" />
        <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 transition-all"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card p-8 rounded-2xl border border-white/5 shadow-xl">
      <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Send Message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Your Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="john@example.com" 
                    {...field} 
                    className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    className="min-h-[150px] resize-none bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-orange-500 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Sending...
              </>
            ) : (
              <>
                <Send size={20} /> Send Message
              </>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}
