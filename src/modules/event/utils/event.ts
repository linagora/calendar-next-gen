import urlJoin from 'url-join';

export const getEventURIFromHref = (href: string) => {
  const parts = href.split('/');

  return parts[parts.length - 1];
};

export const buildEventPathFromEventIdAndUserId = (eventId: string, userId: string) => {
  return urlJoin('/', userId, userId, eventId);
};
