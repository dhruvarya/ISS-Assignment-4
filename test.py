import urllib,json
import unittest
from flask import Flask
from flask_testing import LiveServerTestCase 

"""Testing with LiveServer"""
class MyTest(LiveServerTestCase):
    """ if the create_app is not implemented NotImplementedError will be raised """
    SERVER="http://127.0.0.1:5000/"
    def create_app(self):
        """creates an app for testing at port 8080"""
        app = Flask(__name__)
        app.config['TESTING'] = True
        app.config['LIVESERVER_PORT'] = 8080
        return app 
    def test_controller_is_up_and_running(self):
        """checks if all the urls are working"""
        urls=["","theory","objective","experiment","feedback","quiz","procedure","furtherReading","create","introduction"]
        for i in range(10):
            response = urllib.request.urlopen(self.SERVER+urls[i])
            self.assertEqual(response.code, 200)
            assert "" != response.read()
    def test_get_answer(self):
            """checks the json object used in experiment"""
            response = urllib.request.urlopen(self.SERVER+"getAnswers.json")
            data = json.loads(response.read().decode())
            #checkiing the response from the get_Answers...
            self.assertEquals(data["v0"],0)
    
if __name__ == '__main__':
    unittest.main()