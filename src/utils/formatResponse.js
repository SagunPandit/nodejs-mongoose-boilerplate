export const sendSuccess = status => (res, message) => data => {
  res.status(status).json({ success: 'true', data: { type: 'success', message, data } });
};

export const sendFailure = status => (res, message) => data => {
  res.status(status).json({ success: 'false', data: { type: 'failure', message, data } });
};
