<p align='center'><img src="http://bilaw.al/images/iphone-icon-114x114.png"></p>

This repository contains the source code behind Bilaw.al, a blog built on [Jekyll](http://github.com/mojombo/jekyll). It has been modified to make it easier to create and manage your content, and so that's why I decided to open source it. You're totally welcome to use my template (but no images) for free, though I would appreciate a linkback to either this repository or Bilaw.al (either one isn't necessary).

**Demo:** See the [live site running this source code](http://bilaw.al).

## Getting Setup
* 1. Make sure you've got [Ruby](http://www.ruby-lang.org/en/downloads/) and [Git](http://git-scm.com/download) installed.

* 2. Clone this repository by running the following command:
```
$ git clone https://github.com/bih/bilaw.al.git
```

* 3. Run the commands (in the following order):
```
$ gem install bundler
```

* 4. Using Bundler, download all the dependency gems.
```
$ bundle install
```

* 5. Right, we now need to get Jekyll ready:
```
$ rake install
```

* 6. Now we're all setup.

## Developing your website
It's incredibly easy to edit your site using my version of Jekyll. [Click here](http://github.com/mojombo/jekyll) if you want to see how Jekyll works.

Configuration: _config.yml

Create a new post: 
```
$ rake new:post
```

Create a new page: 
```
$ rake new:page
```

Start development server: 
```
$ rake development
```

Open development server in browser: 
```
$ rake open
```

Generate production site: 
```
$ rake production
```

## Publishing your site
After you've called the `$ rake production` command, your publishable site should be located in the **_production** folder. Upload the folder to any provider of your choosing -- some notable ones are [Amazon S3](http://aws.amazon.com/s3), [AppFog](http://appfog.com) or [GitHub Pages](https://help.github.com/categories/20/articles).

## Maintaining Bilaw.al
As I update my blog often (so I've told myself), I should also be updating this quite frequently. The main objective is that it can act as a great mini-framework for bloggers to get started on Jekyll -- in efforts to boost the popularity of static-site generators. Feel free to contribute, and if you've got any questions or issues, please contact me [on Twitter](http://twitter.com/bilawalhameed). **Have fun!**