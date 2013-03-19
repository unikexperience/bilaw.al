<p align='center'><img src="http://bilaw.al/images/iphone-icon-114x114.png"></p>

This repository contains the source code behind Bilaw.al. It's built on top of [Jekyll](http://github.com/mojombo/jekyll) with custom enhancements (such as a nice Rakefile) to make it easier to create and manage, so I decided to open source it. You're more than welcome to use my template (no images) and I would appreciate a linkback to either this repository or bilaw.al.

**Demo:** See the [site running this source code, bilaw.al](http://bilaw.al).

## Getting Setup
* Make sure you've got [Ruby](http://www.ruby-lang.org/en/downloads/) and [Git](http://git-scm.com/download) installed.

* Clone this repository by running the following command:
```
$ git clone https://github.com/bih/bilaw.al.git
```

* Run the commands (in order):
```
$ gem install bundler
```
```
$ bundle install
```

* Right, we now need to get Jekyll ready:
```
$ rake install
```

* Now we're all setup.

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
After you've called the `$ rake production`, your final HTML site should be located in the **_production** folder. Just upload the contents of the folder to your choice -- check out [Amazon S3](http://aws.amazon.com/s3), [AppFog](http://appfog.com) or [GitHub Pages](https://help.github.com/categories/20/articles).

## Maintaining
As I update my blog often (or I've told myself I will), I should be updating this as frequently as possible. The idea is that it can act as a great neat framework that can encourage people to use static-site generators such as Jekyll. If you find any issues or have any questions, feel free to contribute or contact me [on Twitter](http://twitter.com/bilawalhameed). Finally, be awesome.
