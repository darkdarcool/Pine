# Pine

> Script holder that runs faster than NPM and yarn

Pine is a `npm` and `yarn` run like module, that allows you to organize your scripts and run them ***FAST***. Here is a sample! Make a Pinefile in your project and put in the following:

```
{
  "name": "TestPinefile",
  "pines": {
    "test": "jest"
  }
}
```
And then if you run:

```
pine run test
```
It will run your script with ease! You can put as many pines as you want! Any bash code can be put in! 

And it will run it *lightning fast*, no lag!

# Usage

The example above is something you can copy and paste and edit, but if you want tha full tutorial, here it is!

The name of your Pinefile is important, because it can organize many Pinefiles, and be a little title of what this Pinefile does. Then you need to make Pines, which are the script holders. You can call the pine anything you want, and there can be as many as you want.

Then you have to insert a bash command as the value of the pine name. It can be any valid bash code.

# Contributing

I won't except contributers, as this is just a small project for me, but you can leave ideas and contributions in issues and pull requests!