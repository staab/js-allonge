js-allonge
==========

Repository for collaboration on the project for the Javascript Allonge group 2014

## The aim of the group

To gain a better understanding for two things - javascript and functional programming. I don't really like to call this a 'class' or a 'course', although it'll be structured somewhat like that. The main reason is that I'm in it for my own education, too. I want to learn from you guys, as much as I want to share what I have.

Javascript has a reputation for being all [kinds of things](https://twitter.com/horse_js). It's a [badly written, inconsistent language](http://programmers.stackexchange.com/a/138188) (watch the first video. It's the best), but also universally supported as the language of the web. That's great, since that gives you a universal runtime for your programs, and you only have to worry a little bit about cross-browser compatibility. Javascript is super valuable to know well. If you can write good [vanilla js](http://vanilla-js.com/), you can write lightweight and performant websites, prototype and code quickly, write your own tools, dig into other people's websites regardless of what library/framework they use, and a whole bunch of other things. Useful.

The thing that makes me even more excited about this group is functional programming. There are a whole bunch of nifty [programming paradigms](http://en.wikipedia.org/wiki/Comparison_of_programming_paradigms), among which procedural is probably the one most new programmers are familiar with - and is generally easiest to follow, and Object-Oriented is pretty popular and very powerful. Every paradigm breaks down at some point, though (including functional) - large procedural programs become very complex very quickly if not mixed with other paradigms; the object-oriented paradigm can't gracefully handle some types of data structures, and functional programming has [problems](http://www.perlmonks.org/?node_id=450922), largely having to do with not handling side-effects well. But that's what this is all about! Many expert programmers/popular bloggers suggest that you're not a 'real' programmer if you don't know how to write functional programs. Who knows what that really means, but it is true that functional programming trains you to think differently about problems, and gives you a lot of great tools to write elegant, performant solutions to those problems. From my amateurish dabbling in the paradigm (I wrote a lisp-ish interpreter in javascript last year), I've developed quite a liking for it.

A big part of my motivation for starting this group is that I want to have fun with programming. I've always loved coding, but the beautiful world of algorithms and paradigms does tend to get gummed up with ugly things like low-level computational problems and business logic. The realm of computers I work in is a place that attempts to unify the number churning of computers with the high-level abstractions people talk in. There's always going to be tension there. It's easy to get lost in your failing unit tests and dying server processes and changing requirements. I want to take some time out of my week to just do the fun stuff. And I want to come back to my work with more enthusiasm and creativity to solve those problems. I hope this group does the same for you!


## Getting started

There are a couple things you'll need to do to get going with the project.

- Set up a new ssh key
- Get the source code
- Set up your development environment

If that sounds hard, it's not. Here's a walkthrough:

#### Set up a new ssh key

- We'll be using ssh to interact with git repositories, and you'll need a public/private key pair to do that.
- Follow the directions [here](https://help.github.com/articles/generating-ssh-keys). If they don't work for windows, follow the directions just below.

If you're on windows:
- you'll have to install [putty](http://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) and [puttygen](http://the.earth.li/~sgtatham/putty/latest/x86/puttygen.exe)
- Follow the directions [here](https://www.digitalocean.com/community/tutorials/how-to-create-ssh-keys-with-putty-to-connect-to-a-vps) to create your ssh keys.

#### Get the source code

- [Sign up](https://github.com/) for a GitHub account if you don't have one.
- [Install git](http://git-scm.com/book/en/Getting-Started-Installing-Git) on your computer
- [Set up you ssh key with github](https://help.github.com/articles/generating-ssh-keys#step-3-add-your-ssh-key-to-github) if you haven't already
- [Clone the repository](http://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository) by opening your terminal (ctrl+t or run+cmd on windows), navigating to the directory where you want to store the code, and running `git clone git@github.com:staab/js-allonge.git`.
- Send me an email with your github username so I can add you as a collaborator to the project.

#### Set up your development environment

- Install Node ([Windows/mac](http://nodejs.org/download/), [linux](http://ask.xmodulo.com/install-node-js-linux.html))
- Install a text editor if you haven't. I use [sublime text 3](http://www.sublimetext.com/3). Other good options are laid out [here](http://www.sitepoint.com/sitepoint-smackdown-atom-vs-brackets-vs-light-table-vs-sublime-text/).
- `cd` into your js-allonge directory. Test everything out by running `node test.js`. If "Hello World!" was printed to your console, you're in business!


### The course

Over the next 7 weeks, we'll be building either a javascript library or application (or both!). What we build is something we'll decide on at the first meeting. Also, during the first 6 weeks, we'll be working through [Javascript Allonge](https://leanpub.com/javascript-allonge/read). We'll read a section, do some exercises, and then meet to talk about it. I'll probably come up with some extra exercises to center our discussion of core concepts around. Here's the reading schedule:

- <a name="october_9"> </a>For October 9:
    - Javascript Allonge Reading - [Preface](https://leanpub.com/javascript-allonge/read#leanpub-auto-a-pull-of-the-lever-prefaces) and [Introduction](https://leanpub.com/javascript-allonge/read#leanpub-auto-prelude-values-and-expressions)
    - [Discussion questions and extra reading](extra/prelude.md)
- <a name="october_16"> </a>For October 16:
    - [Chapter 1](https://leanpub.com/javascript-allonge/read#functions) through [Chapter 3](https://leanpub.com/javascript-allonge/read#leanpub-auto-recipes-with-basic-functions)
    - [Discussion questions and extra reading](extra/1-3.md)
- <a name="october_23"> </a>For October 23 -  [Chapter 4](https://leanpub.com/javascript-allonge/read#references) and [Chapter 5](https://leanpub.com/javascript-allonge/read#leanpub-auto-recipes-with-rebinding-and-references)
- <a name="october_30"> </a>For October 30 -  [Chapter 6](https://leanpub.com/javascript-allonge/read#mutable) and [Chapter 7](https://leanpub.com/javascript-allonge/read#leanpub-auto-recipes-with-objects-mutations-and-state)
- <a name="november_6"> </a>For November 6 - [Chapter 8](https://leanpub.com/javascript-allonge/read#methods) through [Chapter 10](https://leanpub.com/javascript-allonge/read#processing)
- <a name="november_13"> </a>For November 13 - [Chapter 11](https://leanpub.com/javascript-allonge/read#redecorating) and [Chapter 12](https://leanpub.com/javascript-allonge/read#leanpub-auto-recipes-for-new-ideas)
- <a name="november_20"> </a>For November 20, TBD

We'll meet at 7-8:30 PM every Thursday night October 9th - November 20th. We'll be meeting at the MosCoWork space on 3rd Street. Admission to the group is free, but you won't be admitted if you don't sign up before the second meeting. Check out the official page [here](https://moscowork.com/javascript-allonge/).