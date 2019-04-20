from flask import Flask
from flask import render_template
from flask_sqlalchemy import SQLAlchemy
from flask import request
from flask import jsonify
from answers import ans as ans2, ind


from user import app,db,Entry
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.route('/getAnswers.json')
def ans():
    """returns the answers by importing the annswer stored in a list in answers.py.... """
    ret = {}
    for i in range(12):
        ret[ind[i]] = ans2[ind[i]]
    ret['id']="id"
    return jsonify(ret)



"""Different routes implemented by python-flask basis....""" 
@app.route('/')
@app.route('/introduction')
def index():
    return render_template('Introduction.html')



@app.route('/objective', methods=["GET","POST"])
def obj():
    return render_template('Objective.html')

@app.route('/theory', methods=["GET","POST"])
def theory():
    return render_template('Theory.html')

@app.route('/experiment', methods=["GET","POST"])
def experiment():
    return render_template('Experiment.html')


@app.route('/create', methods=["GET"])
def quiz():
    return render_template('Quizzes.html')

@app.route('/procedure', methods=["GET"])
def procedure():
    return render_template('Procedure.html')


@app.route('/furtherReading', methods=["GET"])
def FurtherReading():
    return render_template('furtherReading.html')


@app.route('/feedback', methods=["GET"])
def feedback():
    return render_template('Feedback.html')



@app.route('/create', methods=["POST"])
def storeQuiz():
    """creating a route to stores quiz question and answers on the database...."""
    a1 = request.form['a1']
    a2 = request.form['a2']
    new_entry = Entry(a1 , a2)
    db.create_all()
    db.session.add(new_entry)
    db.session.commit()
    temp ={}
    temp['status']=(type(new_entry)==Entry)
    return jsonify(temp)

@app.route('/quiz')
def check():
    """this reads all quiz questions and answers stored in db and shows it to user"""
    db.create_all()
    allEntries = Entry.query.all()
    return render_template('answers.html',result=allEntries)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug = True)
