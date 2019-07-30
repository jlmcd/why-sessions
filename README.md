This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Why Session Cookies?

This repository is for demonstrating the `express-session` package from npm.

### Example `.env` file

```
SERVER_PORT = 4567
SESSION_SECRET = oiuygoIGHpouihpiuGBPibuUYofviJVBhivcputDIyfpyiuH
```

### Branches

There are a few branches in this project which will help you in your demonstration:
* `master` branch shows what an app with a global variable in the server will look like. Share the IP address from your development server and have students click the button. What happens?
* `session` branch shows what the same app will look like with express-session implemented. Each student will have an individualized experience.
* `custom-middleware` branch shows how custom middleware can be created and implemented. This can be useful in describing how sessions work.

### Cookie Limits

There is a 4kb limit to the size of a cookie stored on a local machine. Sessions help us get out of this limitation by storing the data on the server in a __session store__, accessible by a __session id__ found in a cookie.