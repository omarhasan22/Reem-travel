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

const contactInfoVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const contactItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

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

  const contactItems = [
    {
      icon: MapPin,
      title: t.contact.address,
      value: t.contact.addressValue,
      dir: undefined,
      flip: false,
    },
    {
      icon: Phone,
      title: t.contact.phone,
      value: "+961 81 821 751",
      dir: "ltr" as const,
      flip: true,
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: "info@reemtravel.com",
      dir: undefined,
      flip: false,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wide uppercase text-sm mb-3"
          >
            {t.contact.badge}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-12 h-1 bg-primary rounded-full mx-auto mb-4"
          />
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div
              variants={contactInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-2xl font-bold mb-4">{t.contact.contactInfo}</h4>

              {contactItems.map((item, index) => (
                <motion.div key={index} variants={contactItemVariants} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <item.icon className={`w-6 h-6 ${item.flip ? "flip-icon" : ""}`} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">{item.title}</h5>
                    <p className="text-muted-foreground mt-1 whitespace-pre-line" dir={item.dir}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-primary/20 shadow-lg bg-gradient-to-br from-white to-primary/5 hover:shadow-xl transition-shadow duration-300">
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
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="shadow-xl border-none hover:shadow-2xl transition-shadow duration-500">
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
                              <Input placeholder={t.contact.form.namePlaceholder} className="bg-muted/50 h-12 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all" {...field} />
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
                              <Input placeholder={t.contact.form.phonePlaceholder} className="bg-muted/50 h-12 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all" {...field} />
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
                            <Input placeholder={t.contact.form.emailPlaceholder} className="bg-muted/50 h-12 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all" {...field} />
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
                              className="bg-muted/50 min-h-[150px] rounded-xl resize-none focus:ring-2 focus:ring-primary/20 transition-all"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(30, 115, 190, 0.4)",
                          "0 0 0 10px rgba(30, 115, 190, 0)",
                          "0 0 0 0 rgba(30, 115, 190, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="rounded-xl"
                    >
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
                    </motion.div>
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
