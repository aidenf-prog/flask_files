from flask import Flask, render_template, request, send_from_directory, render_template_string


app = Flask(__name__)

@app.route('/neilfungames')
def neilFun():
    return render_template('neilufungames.html')

@app.route('/')
def homepage():
    return render_template('homePage.html')

@app.route('/createaccount')
def createAccount():
    return render_template('formCreateAccount.html')

if __name__=='__main__':
    app.run(debug=True)
        