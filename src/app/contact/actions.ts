"use server";

export async function submitContactForm(
  _prevState: { success: boolean; message: string },
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const phone = formData.get("phone") as string;
  const interest = formData.get("interest") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !interest || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // In production, send email via Resend/EmailJS or store in database
  // For now, log to console
  console.log("Contact form submission:", {
    name,
    email,
    company,
    phone,
    interest,
    message,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: "Thank you for your message! We will get back to you shortly.",
  };
}
