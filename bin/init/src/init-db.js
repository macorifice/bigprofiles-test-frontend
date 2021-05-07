db.createUser({
  user: 'admin_user',
  pwd: 'admin_pass',
  roles: [
    {
      role: 'dbOwner',
      db: 'bigprofiles',
    },
  ],
});
