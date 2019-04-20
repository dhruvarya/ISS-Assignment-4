from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///stored-answers.db'
db = SQLAlchemy(app)

class Entry(db.Model):
    """This class contains the question and answer stored in quiz section"""
    id = db.Column(db.Integer, primary_key=True)
    a1 = db.Column(db.String(80),unique = False)
    a2 = db.Column(db.String(80),unique = False)
    
    def __init__(self, a1, a2):
        self.a1 = a1
        self.a2 = a2