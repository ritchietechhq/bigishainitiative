import { describe, expect, it } from "vitest";
import { contactFormSchema, volunteerFormSchema, partnerFormSchema, newsletterSchema, donationSchema } from "../client/src/lib/validation";

describe("Form Validation Schemas", () => {
  describe("contactFormSchema", () => {
    it("should validate a correct contact form", () => {
      const data = {
        name: "John Doe",
        email: "john@example.com",
        subject: "Partnership Inquiry",
        message: "I would like to partner with BIG ISHA Initiative.",
      };
      expect(() => contactFormSchema.parse(data)).not.toThrow();
    });

    it("should reject invalid email", () => {
      const data = {
        name: "John Doe",
        email: "invalid-email",
        subject: "Partnership Inquiry",
        message: "I would like to partner with BIG ISHA Initiative.",
      };
      expect(() => contactFormSchema.parse(data)).toThrow();
    });

    it("should reject short name", () => {
      const data = {
        name: "J",
        email: "john@example.com",
        subject: "Partnership Inquiry",
        message: "I would like to partner with BIG ISHA Initiative.",
      };
      expect(() => contactFormSchema.parse(data)).toThrow();
    });

    it("should reject short message", () => {
      const data = {
        name: "John Doe",
        email: "john@example.com",
        subject: "Partnership Inquiry",
        message: "Hi",
      };
      expect(() => contactFormSchema.parse(data)).toThrow();
    });
  });

  describe("newsletterSchema", () => {
    it("should validate correct email", () => {
      const data = { email: "subscriber@example.com" };
      expect(() => newsletterSchema.parse(data)).not.toThrow();
    });

    it("should reject invalid email", () => {
      const data = { email: "not-an-email" };
      expect(() => newsletterSchema.parse(data)).toThrow();
    });
  });

  describe("donationSchema", () => {
    it("should validate correct donation", () => {
      const data = {
        amount: 5000,
        cause: "education",
        type: "one-time",
        paymentMethod: "paystack",
      };
      expect(() => donationSchema.parse(data)).not.toThrow();
    });

    it("should reject zero amount", () => {
      const data = {
        amount: 0,
        cause: "education",
        type: "one-time",
        paymentMethod: "paystack",
      };
      expect(() => donationSchema.parse(data)).toThrow();
    });

    it("should reject negative amount", () => {
      const data = {
        amount: -1000,
        cause: "education",
        type: "one-time",
        paymentMethod: "paystack",
      };
      expect(() => donationSchema.parse(data)).toThrow();
    });

    it("should reject invalid payment method", () => {
      const data = {
        amount: 5000,
        cause: "education",
        type: "one-time",
        paymentMethod: "crypto",
      };
      expect(() => donationSchema.parse(data)).toThrow();
    });
  });

  describe("volunteerFormSchema", () => {
    it("should validate correct volunteer form", () => {
      const data = {
        fullName: "Jane Smith",
        email: "jane@example.com",
        phone: "08012345678",
        experience: "I have 5 years of teaching experience and passion for community development.",
        availability: "weekends",
      };
      expect(() => volunteerFormSchema.parse(data)).not.toThrow();
    });

    it("should reject short phone number", () => {
      const data = {
        fullName: "Jane Smith",
        email: "jane@example.com",
        phone: "123",
        experience: "I have 5 years of teaching experience and passion for community development.",
        availability: "weekends",
      };
      expect(() => volunteerFormSchema.parse(data)).toThrow();
    });
  });

  describe("partnerFormSchema", () => {
    it("should validate correct partner form", () => {
      const data = {
        organizationName: "Tech NGO Foundation",
        contactPerson: "Alice Johnson",
        email: "alice@techfoundation.org",
        phone: "08098765432",
        proposedPartnership: "We would like to collaborate on tech skills training programs.",
      };
      expect(() => partnerFormSchema.parse(data)).not.toThrow();
    });

    it("should reject invalid email", () => {
      const data = {
        organizationName: "Tech NGO Foundation",
        contactPerson: "Alice Johnson",
        email: "not-an-email",
        phone: "08098765432",
        proposedPartnership: "We would like to collaborate on tech skills training programs.",
      };
      expect(() => partnerFormSchema.parse(data)).toThrow();
    });
  });
});
