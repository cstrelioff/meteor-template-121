**meteor-template-121**

My template for a basic Meteor 1.2.1 project -- this should work with Meteor
versions 1.2.1+. The project structure has been modified to make a non-trivial
starting app:

* bootstrap styling and account-ui have ben used
* autopublish and insecure packages are removed
* publish/subscribe as well as an example method is used
* fake users and data are added on startup to provide something to look at
* iron:router used for /users and /data urls

**using this repository**

* Clone the repository (or fork, if you'd prefer) and

```bash
$ git clone git@github.com:cstrelioff/meteor-template-121.git
```

or

```bash
$ git clone https://github.com/cstrelioff/meteor-template-121.git
```

* Start Meteor

Assuming Meteor is installed on you machine, again verion 1.2.1+, try

```bash
$ cd meteor-template-121
$ meteor
```

Meteor should indicate that version 1.2.1 is being used and more recent versions
are available -- you should also see that fake users and data are created. Use
this starting data to play around. Finally, open the url
`http://localhost:3000/` to checkout the starting point. 

That's it -- enjoy!

