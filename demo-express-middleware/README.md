# Node modules

* JavaScript does not specify a way to create modules for isolation of code.
* Node uses require, module, and exports for module dependency and isolation.
* Node modules can be a single file or a folder. If it's a folder then index.js is the default file it loads, can be overwritten by package.json.
* Absolute modules are specified with no path, they are found in `node_modules`.
<pre>
var fs = require('fs');
</pre>
* Relative modules require a JavaScript file with a path to where it resides.
<pre>
var auth = require('/lib/auth');
</pre>

# Express (Middleware)

Why middleware? When handling a request you often a several different isolated tasks that need to be taken care of.

For example, you might...

* Log the request
* Parse the body
* Check request parameters
* Authorize the request
* Finally handle the request and send it back

If you start parsing the request to do all the tests the code starts looking pretty hairy. Middleware is a _control flow_
mechanism to make it easier for you to handle these tasks in a structured manner. Each middleware component is a function that
does its job and then calls `next()` to send the `request` and `response` object to the next part of flow.

# Tasks

In this exercise we want to build up middleware components.

1. Write a simple middle component that logs information for each request.
2. Put the middleware component in a separate module and reference it.
3. Write a simple authentication middleware component that authenticates by username/password (can be plain text & hard-cored).
