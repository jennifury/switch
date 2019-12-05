import webapp2
import jinja2
import os
from google.appengine.ext import ndb
from google.appengine.ext import db

jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class HomepageHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_env.get_template('templates/homepage.html')
        self.response.write(template.render())

class AboutUsHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_env.get_template('templates/about_us.html')
        self.response.write(template.render())

class ContactUsHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_env.get_template('templates/contact_us.html')
        self.response.write(template.render())

class SellingHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_env.get_template('templates/selling.html')
        self.response.write(template.render())

class DonateHandler(webapp2.RequestHandler):
    def get(self):

        posts = NewPost.query().filter(NewPost.cat == 'Donating').fetch()
        list_dict = {
        "num_of_items": len(posts),
        "items": posts
        }

        template = jinja_env.get_template('templates/donating.html')
        self.response.write(template.render(list_dict))

class FreelanceHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_env.get_template('templates/freelance.html')
        self.response.write(template.render())

class TradingHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_env.get_template('templates/trading.html')
        self.response.write(template.render())

class WishlistHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_env.get_template('templates/wishlist.html')
        self.response.write(template.render())

class NewPost(ndb.Model):
    image = ndb.BlobProperty()
    cat = ndb.StringProperty(required=True)
    subcat =ndb.StringProperty(required=True)
    comm = ndb.StringProperty(required=True)
    title = ndb.StringProperty(required=True)
    price = ndb.StringProperty(required=True)
    paragraph = ndb.StringProperty(required=True)

class CreatePostHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_env.get_template('templates/create_post.html')
        self.response.write(template.render())

    def post(self):
        post_cat = self.request.get('cat')
        post_subcat = self.request.get('subcat')
        post_title = self.request.get('name')
        post_pics = self.request.get('pic')
        post_price = self.request.get('pricetag')
        post_com = self.request.get('commun')
        # file_upload = self.request.POST.get("pics", None)
        post_desc = self.request.get('desc')

        # new_name = NewPost(name=poster_name, item = post_item, paragraph = post_desc, image= file_upload.file.read())
        new_name = NewPost(cat=poster_cat, subcat = post_subcat, paragraph = post_desc, image= db.Blob(str(post_pics)), title = post_title, comm = post_com, price = post_price)

        new_name.put()
        self.redirect("/thankyou")

class ImageHandler(webapp2.RequestHandler):
    def get(self):
        posts = NewPost.query().fetch()

        list_dict = {
        "num_of_items": len(posts)
        }
        index = self.request.get('index')
        index = int(index)
        if posts[index].image:
          self.response.headers['Content-Type'] = "image/jpg"
          self.response.out.write(posts[index].image)
        else:
          self.redirect('static/noimage.svg')


app = webapp2.WSGIApplication([
    ('/', HomepageHandler),
    ('/about_us', AboutUsHandler),
    ('/contact_us', ContactUsHandler),
    ('/selling', SellingHandler),
    ('/donate', DonateHandler),
    ('/freelance', FreelanceHandler),
    ('/trade', TradingHandler),
    ('/wishlist', WishlistHandler),
    ('/create_post', CreatePostHandler),
], debug=True)
