import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send, QrCode } from "lucide-react";
import { useCreateContactMessage, type ContactInput } from "@/hooks/use-contact";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const { t } = useLanguage();
  const mutation = useCreateContactMessage();

  const contactFormSchema = z.object({
    name: z.string().min(1, t.contact.form.nameRequired),
    email: z.string().email(t.contact.form.emailInvalid),
    phone: z.string().optional(),
    message: z.string().min(1, t.contact.form.messageRequired),
  });

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactInput) => {
    mutation.mutate(data);
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wide uppercase text-sm mb-3"
          >
            {t.contact.badge}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {t.contact.title}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info & Location (Left side in English, Right side in RTL) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <h4 className="text-2xl font-bold mb-4">{t.contact.contactInfo}</h4>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg">{t.contact.address}</h5>
                  <p className="text-muted-foreground mt-1 whitespace-pre-line">{t.contact.addressValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 flip-icon" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg">{t.contact.phone}</h5>
                  <p className="text-muted-foreground mt-1" dir="ltr">+961 81 821 751</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg">{t.contact.email}</h5>
                  <p className="text-muted-foreground mt-1">info@reemtravel.com</p>
                </div>
              </div>
            </div>

            <Card className="border-primary/20 shadow-lg bg-gradient-to-br from-white to-primary/5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8" />
                </div>
                <h5 className="font-bold text-lg mb-2">{t.contact.qr.title}</h5>
                <p className="text-sm text-muted-foreground mb-4">{t.contact.qr.description}</p>
                <div className="bg-white p-4 rounded-xl inline-block shadow-inner border">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/96181821751`} 
                    alt="QR Code" 
                    className="w-32 h-32"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="shadow-xl border-none">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6">{t.contact.sendMessage}</h4>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">{t.contact.form.name}</FormLabel>
                            <FormControl>
                              <Input placeholder={t.contact.form.namePlaceholder} className="bg-muted/50 h-12 rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">{t.contact.form.phone}</FormLabel>
                            <FormControl>
                              <Input placeholder={t.contact.form.phonePlaceholder} className="bg-muted/50 h-12 rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">{t.contact.form.email}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.contact.form.emailPlaceholder} className="bg-muted/50 h-12 rounded-xl" {...field} />
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
                          <FormLabel className="text-base font-semibold">{t.contact.form.message}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t.contact.form.messagePlaceholder} 
                              className="bg-muted/50 min-h-[150px] rounded-xl resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full rounded-xl h-14 text-lg font-bold shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? t.contact.form.sending : (
                        <>
                          <Send className="w-5 h-5 ml-2 flip-icon" />
                          {t.contact.form.send}
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
