/**
 * Utility to construct and trigger client mailto actions with encoded subjects and bodies.
 */
export function openMailto({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const encSubject = encodeURIComponent(subject);
  const encBody = encodeURIComponent(body);
  window.location.href = `mailto:${to}?subject=${encSubject}&body=${encBody}`;
}
