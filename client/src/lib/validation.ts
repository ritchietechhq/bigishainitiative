import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export const volunteerFormSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10),
  experience: z.string().max(5000),
  availability: z.enum(["full-time", "part-time", "weekends", "flexible"]),
});

export const partnerFormSchema = z.object({
  organizationName: z.string().min(2).max(200),
  contactPerson: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10),
  proposedPartnership: z.string().max(5000),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const donationSchema = z.object({
  amount: z.number().positive("Amount must be greater than 0"),
  cause: z.string(),
  type: z.enum(["one-time", "recurring"]),
  paymentMethod: z.enum(["paystack", "flutterwave", "bank"]),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type VolunteerFormData = z.infer<typeof volunteerFormSchema>;
export type PartnerFormData = z.infer<typeof partnerFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type DonationData = z.infer<typeof donationSchema>;
