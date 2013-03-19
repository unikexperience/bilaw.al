![http://bilaw.al/images/iphone-icon-228x228.png](http://bilaw.al)
## Bilaw.al (Powered by Jekyll) ##

I've used [Jekyll](http://jekyllrb.com) to build my new website, bilaw.al. I have added some goodness to make it easier for you to get started with, and you're more than welcome to modify my site template (it'd be nice for a linkback too!).

## Getting Setup
* Make sure you've got Ruby installed (Check by entering `ruby --version` in your Terminal). [Click here for instructions](http://www.ruby-lang.org/en/downloads/).

* Clone this repository by running the following command:
```git clone https://github.com/bih/bilaw.al.git``

* Run the commands (in order):
```gem install bundler```
```bundle install```

* Right, we now need to get Jekyll ready:
```rake install``

* Now we're all setup.

## Developing your website
It's incredibly easy to edit your site using my version of Jekyll. [Click here](http://github.com/mojombo/jekyll) if you want to see how Jekyll works.

Configuration: _config.yml

Create a new post: `rake new:post`
Create a new page: `rake new:page`
Start development server: `rake development`
Open development server in browser: `rake open`
Generate production site `rake production`

## Publishing your site
After you've called the `rake production`, your final HTML site should be located in _production/ and you can just upload the entire folder to the server of your choice.

## Maintenance
As I use this for my site, I will update it more than usual. I hope it acts as a great framework for any other Jekyll users. Be awesome. ;)
