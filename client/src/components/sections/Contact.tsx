import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send, QrCode } from "lucide-react";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";

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
  const mutation = useCreateContactMessage();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
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
            نحن هنا لخدمتك
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            تواصل معنا الآن
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
              <h4 className="text-2xl font-bold mb-4">معلومات الاتصال</h4>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg">العنوان</h5>
                  <p className="text-muted-foreground mt-1">طرابلس، جبل البداوي<br/>شارع الأحباش بالقرب من تعاونية دانا</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 flip-icon" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg">الهاتف</h5>
                  <p className="text-muted-foreground mt-1" dir="ltr">+961 XX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg">البريد الإلكتروني</h5>
                  <p className="text-muted-foreground mt-1">info@reemtravel.com</p>
                </div>
              </div>
            </div>

            <Card className="border-primary/20 shadow-lg bg-gradient-to-br from-white to-primary/5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8" />
                </div>
                <h5 className="font-bold text-lg mb-2">Scan & Contact Us</h5>
                <p className="text-sm text-muted-foreground mb-4">امسح الرمز للتواصل المباشر معنا عبر الواتساب</p>
                <div className="bg-white p-4 rounded-xl inline-block shadow-inner border">
                  {/* Placeholder for real QR Code image */}
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Contact%20Reem%20Travel`} 
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
                <h4 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h4>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">الاسم الكامل</FormLabel>
                            <FormControl>
                              <Input placeholder="أدخل اسمك" className="bg-muted/50 h-12 rounded-xl" {...field} />
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
                            <FormLabel className="text-base font-semibold">رقم الهاتف</FormLabel>
                            <FormControl>
                              <Input placeholder="أدخل رقمك" className="bg-muted/50 h-12 rounded-xl" {...field} />
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
                          <FormLabel className="text-base font-semibold">البريد الإلكتروني</FormLabel>
                          <FormControl>
                            <Input placeholder="أدخل بريدك الإلكتروني" className="bg-muted/50 h-12 rounded-xl" {...field} />
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
                          <FormLabel className="text-base font-semibold">الرسالة</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="كيف يمكننا مساعدتك؟" 
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
                      {mutation.isPending ? "جاري الإرسال..." : (
                        <>
                          <Send className="w-5 h-5 ml-2 flip-icon" />
                          إرسال الرسالة
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
