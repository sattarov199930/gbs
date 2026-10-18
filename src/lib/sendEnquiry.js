export function enquiryMailto({ to, subject, name, email, message, fields = {} }) {
  const details = Object.entries(fields)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  const body = [`Name: ${name}`, `Email: ${email}`, details, "", message].filter(Boolean).join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function sendEnquiry(input) {
  if (input.honey) return;
  window.location.href = enquiryMailto(input);
}
