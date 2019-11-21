import webapp2
import jinja2
import os

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
        template = jinja_env.get_template('templates/donate.html')
        self.response.write(template.render())

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

app = webapp2.WSGIApplication([
    ('/', HomepageHandler),
    ('/about_us', AboutUsHandler),
    ('/contact_us', ContactUsHandler),
    ('/selling', SellingHandler),
    ('/donate', DonateHandler),
    ('/freelance', FreelanceHandler),
    ('/trade', TradingHandler),
    ('/wishlist', WishlistHandler),
], debug=True)
