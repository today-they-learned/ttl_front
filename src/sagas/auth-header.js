const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${user.accessToken}` };
  }
  return { 'Content-Type': 'application/json' };
};

export default authHeader;
