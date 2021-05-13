export const buildAttendeeEmailFromUserEmail = (userEmail: string) => {
  if (userEmail.startsWith('mailto:')) return userEmail;

  return `mailto:${userEmail}`;
};
